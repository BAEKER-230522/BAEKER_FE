import axios, { AxiosResponse } from "axios";

const twoWeeksFromNow = new Date();
twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14); // 현재 날짜에서 14일(2주)를 더합니다.
const utcDate = twoWeeksFromNow.toUTCString();

let isRefreshing = false;
let refreshedTokenPromise: Promise<any> | null = null;

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

// 요청 인터셉터 : 헤더에 토큰 추가
instance.interceptors.request.use(
  (config) => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="))
      ?.split("=")[1];
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터: 401 에러 처리
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: any) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401 && !isRefreshing) {
      isRefreshing = true;
      const originalRequest = config;
      const refreshToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("refreshToken="))
        ?.split("=")[1];

      refreshedTokenPromise = axios
        .post(
          `${process.env.NEXT_PUBLIC_BASE_URL}api/member/v1/accessToken/expired`,
          {},
          {
            headers: {
              refreshToken,
            },
          }
        )
        .then((res) => {
          isRefreshing = false;
          refreshedTokenPromise = null;
          return res.data.data;
        })
        .catch((err) => {
          isRefreshing = false;
          // 재발급 요청에 대한 권한이 없음
          if (err.response.status === 403) {
            // 로그아웃 로직
          }
          return Promise.reject(err);
        });

      const newToken = await refreshedTokenPromise;

      if (newToken) {
        console.log(newToken, "new Tokwn", "5");
        config.headers.Authorization = newToken.accessToken;
        document.cookie = `accessToken=${newToken.accessToken}; path=/; samesite=strict`;
        document.cookie = `refreshToken=${newToken.refreshToken}; path=/; samesite=strict; expires=${utcDate}`;
      }

      // '최초 만료 요청'
      return instance(originalRequest);
    }

    // 이전에 토큰 갱신을 시도했지만 아직 완료되지 않았을 때
    if (status === 401 && isRefreshing) {
      // 요청 대기
      const newToken = await refreshedTokenPromise;
      if (newToken) {
        config.headers.Authorization = newToken;
      }
      // 대기 요청 처리
      return instance(config);
    }

    return Promise.reject(error);
  }
);

export default instance;
