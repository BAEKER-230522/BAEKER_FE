import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const END_POINT = "api/rule";
const BASE_URL = "http://101.101.208.240:9000/";

export const ruleApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  reducerPath: "ruleApi",
  tagTypes: ["Rule"],
  endpoints: (builder) => ({
    // 모든 규칙 정보 가져오기
    getAllRules: builder.query({
      query: () => `${END_POINT}/v1/search`,
    }),

    // id로 규칙 정보 가져오기
    getRule: builder.query({
      query: (id) => `${END_POINT}/v1/search/${id}`,
    }),

    // 규칙 생성
    createRule: builder.mutation({
      query: (body) => ({
        url: `${END_POINT}/v1/rules`,
        method: "POST",
        body,
      }),
    }),
  }),
});
