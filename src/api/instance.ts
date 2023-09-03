import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

// 요청 인터셉터: 헤더에 토큰 추가
instance.interceptors.request.use((config) => {
  console.log(config, '1');
  const token = document.cookie
          .split('; ')
          .find(row => row.startsWith('accessToken='))
          ?.split('=')[1];
  if(token){
    config.headers.Authorization = token
  }
  return config
});

// 응답 인터셉터: 401 에러 처리
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: any) => {
    const { config, response: { status } } = error
    console.log(config, '2');
    console.log(status, '3');
    
    // 401 에러이고 아직 토큰 갱신을 시도하지 않았다면
    if (status === 403) {
      console.log('토큰 만료 axios interceptor axios interceptor axios interceptor');
      
      const originalRequest = config;
      const refreshToken = document.cookie
                          .split('; ')
                          .find(row => row.startsWith('refreshToken='))
                          ?.split('=')[1];
      const newToken = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}api/member/v1/accessToken/expired`
        ,{}
        ,{
          headers: {
            refreshToken
          }
        }
      );

      if(newToken){
        config.headers.Authorization = newToken
      }
      

      // 원래 요청 다시 시도
      return instance(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default instance;