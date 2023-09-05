import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const END_POINT = "api/rule/v1";

interface IGetSearchRuleParams {
  page: number;
  keyword: string;
}
export const ruleApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      if (typeof window !== "undefined") {
        // 브라우저 환경 확인
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("accessToken="))
          ?.split("=")[1];
        if (token) {
          headers.set("authorization", `${token}`);
        }
      }

      return headers;
    },
  }),
  reducerPath: "ruleApi",
  tagTypes: ["Rule"],
  endpoints: (builder) => ({
    // 모든 규칙 정보 가져오기
    getAllRules: builder.query({
      query: () => `${END_POINT}/search`,
      providesTags: [{ type: "Rule" }],
    }),

    // id로 규칙 정보 가져오기
    getRule: builder.query({
      query: (id) => `${END_POINT}/search/${id}`,
      providesTags: [{ type: "Rule" }],
    }),

    // 규칙 검색
    getSearchRule: builder.query({
      query: (params: IGetSearchRuleParams) =>
        `${END_POINT}/v1/list?page=${params.page}?keyword=${params.keyword}`,
      providesTags: [{ type: "Rule" }],
    }),

    // 규칙 생성
    createRule: builder.mutation({
      query: (body) => ({
        url: `${END_POINT}/rules`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Rule" }],
    }),

    // 규칙 삭제
    deleteRule: builder.mutation({
      query: (id) => ({
        url: `${END_POINT}/rules/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Rule" }],
    }),

    // 규칙 수정
    updateRule: builder.mutation({
      query: ({ id, body }) => ({
        url: `${END_POINT}/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "Rule" }],
    }),
  }),
});

export const {
  useDeleteRuleMutation,
  useCreateRuleMutation,
  useGetSearchRuleQuery,
  useGetRuleQuery,
  useGetAllRulesQuery,
  useUpdateRuleMutation,
} = ruleApi;
