import axios, { AxiosResponse } from "axios";

let isRefreshing = false;
let refreshedTokenPromise: Promise<any> | null = null;

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

// 요청 인터셉터 : 헤더에 토큰 추가
instance.interceptors.request.use((config) => {
  // console.log(config, '요청 interceptor', '1');
  const token = document.cookie
          .split('; ')
          .find(row => row.startsWith('accessToken='))
          ?.split('=')[1];
  if(token){
    // console.log(token, 'interceptor token');    
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
    // console.log(config, '토큰 만료 요청 interceptor', '2');
    
    // 401 에러이고 아직 토큰 갱신을 시도하지 않았다면
    if (status === 401 && !isRefreshing) {
        isRefreshing = true;
        // console.log(config, '토큰 만료 axios interceptor axios interceptor axios interceptor');
        
        const originalRequest = config;
        const refreshToken = document.cookie
                            .split('; ')
                            .find(row => row.startsWith('refreshToken='))
                            ?.split('=')[1];

        refreshedTokenPromise = axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}api/member/v1/accessToken/expired`
        ,{}
        ,{
          headers: {
            refreshToken
          }
        }
      ).then(res => {
        isRefreshing = false;
        refreshedTokenPromise = null;
        // console.log('refreshedTokenPromise = null', '4');
        return res.data.data.accessToken;
      }).catch(err => {
        isRefreshing = false;
        return Promise.reject(err);
      });
                  

      const newToken = await refreshedTokenPromise
      if(newToken){
        // console.log(newToken, 'new Tokwn', '5');
        config.headers.Authorization = newToken
        document.cookie = `accessToken=${newToken}; path=/; samesite=strict`;
      }

      // 원래 요청 다시 시도
      // console.log(originalRequest, '최초 만료 요청', '6');
      return instance(originalRequest);
    }
      
    // 이전에 토큰 갱신을 시도했지만 아직 완료되지 않았을 때
    if (status === 401 && isRefreshing) {
      // console.log(refreshedTokenPromise, config, '요청 대기', '6');
      const newToken = await refreshedTokenPromise;
      if(newToken){
        config.headers.Authorization = newToken;
      }
      // console.log(refreshedTokenPromise, config, '대기 요청 처리', '7');
      return instance(config);
    }

    return Promise.reject(error);
  }
);

export default instance;