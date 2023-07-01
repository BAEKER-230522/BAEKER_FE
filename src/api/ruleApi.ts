import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const END_POINT = "api/rule";
const BASE_URL = "http://101.101.208.240:9000/";

interface IGetSearchRuleParams {
  page : number;
  keyword: string;
};
export const ruleApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  reducerPath: "ruleApi",
  tagTypes: ["Rule"],
  endpoints: (builder) => ({
    // 모든 규칙 정보 가져오기
    getAllRules: builder.query({
      query: () => `${END_POINT}/v1/search`,
      providesTags : [{type:"Rule"}],
    }),

    // id로 규칙 정보 가져오기
    getRule: builder.query({
      query: (id) => `${END_POINT}/v1/search/${id}`,
      providesTags : [{type:"Rule"}],
    }),

    // 규칙 검색
    getSearchRule: builder.query({
      query: (params:IGetSearchRuleParams) => `${END_POINT}/v1/list?page=${params.page}?keyword=${params.keyword}`,
      providesTags : [{type:"Rule"}],
    }),

    // 규칙 생성
    createRule: builder.mutation({
      query: (body) => ({
        url: `${END_POINT}/v1/rules`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{type: "Rule"}]
    }),

    // 규칙 삭제
    deleteRule: builder.mutation({
      query: (id) => ({
        url: `${END_POINT}/v1/rules/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{type: "Rule"}]
    }),

    
  }),
});
