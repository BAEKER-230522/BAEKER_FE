import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";
const END_POINT = "api/solved/v1";
export const solvedApi = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "solvedApi",
  tagTypes: ["Solved"],
  endpoints: (builder) => ({
    // 문제 번호로 문제 제목 가져오기
    getSolveTitle: builder.query({
      query: (id) => ({
        url: `${END_POINT}/${id}`,
        method: "GET",
      }),
      providesTags: [{ type: "Solved" }],
    }),
  }),
});

export const { useGetSolveTitleQuery } = solvedApi;
