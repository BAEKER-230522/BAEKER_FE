import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const END_POINT = "api/solved/v1";
export const solvedApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      if (typeof window !== 'undefined') { // 브라우저 환경 확인
        const token = document.cookie
          .split('; ')
          .find(row => row.startsWith('accessToken='))
          ?.split('=')[1];
        if (token) {
          headers.set('authorization', `${token}`);
        }
      }
      return headers;
    }
  }),
  reducerPath: "solvedApi",
  tagTypes: ["Solved"],
  endpoints: (builder) => ({
    // 문제 번호로 문제 제목 가져오기
    getSolveTitle: builder.query({
      query: (id) => `${END_POINT}/${id}`,
      providesTags: [{type: "Solved"}]
    }),
  }),
});

export const { useGetSolveTitleQuery } = solvedApi;
