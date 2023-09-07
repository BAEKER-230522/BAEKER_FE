import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

const END_POINT = "api/member";
export const memberApi = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "memberApi",
  tagTypes: ["Member"],
  endpoints: (builder) => ({
    // 모든 멤버 랭킹순
    getAllMembers: builder.query({
      // query가 없다면 ? 어떻게 해야할까 ?
      query: ({ page, limit }) => ({
        url: `${END_POINT}/get/v1/ranking?page=${page}&content=${limit}`,
        method: "GET",
      }),
      providesTags: [{ type: "Member" }],
    }),

    // id로 멤버 정보 가져오기
    getMember: builder.query({
      query: (id) => ({
        url: `${END_POINT}/get/v1/id?id=${id}`,
        method: "GET",
      }),
      providesTags: [{ type: "Member" }],
    }),

    // 멤버 생성
    createMember: builder.mutation({
      query: (data) => ({
        url: `${END_POINT}/v1/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [{ type: "Member" }],
    }),

    // 멤버 정보 수정
    updateMember: builder.mutation({
      query: (data) => ({
        url: `${END_POINT}/v1/update`,
        method: "POST",
        data,
      }),
      invalidatesTags: [{ type: "Member" }],
    }),
    // http://bk.1ll.ca/api/member/v1/connect/baekjoon/2?name=chumjio1o
    // 백준 연동
    connectBaekjoon: builder.mutation({
      query: ({ memberId, baekjoonId }) => ({
        url: `${END_POINT}/v1/connect/baekjoon/${memberId}?name=${baekjoonId}`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "Member" }],
    }),
    // 유저의 일주일 문제풀이 현황
    weeklyUserProblemStatus: builder.query({
      query: (id) => ({
        url: `${END_POINT}/get/v1/snapshot/week?id=${id}`,
        method: "GET",
      }),
      providesTags: [{ type: "Member" }],
    }),
  }),
});

export const {
  useGetAllMembersQuery,
  useGetMemberQuery,
  useCreateMemberMutation,
  useConnectBaekjoonMutation,
  useWeeklyUserProblemStatusQuery,
} = memberApi;
