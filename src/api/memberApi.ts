import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const END_POINT = "api/member";
export const memberApi = createApi({
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
  reducerPath: "memberApi",
  tagTypes: ["Member"],
  endpoints: (builder) => ({
    // 모든 멤버 정보 가져오기
    getAllMembers: builder.query({
      // query가 없다면 ? 어떻게 해야할까 ?
      query: () => `${END_POINT}/get/v1/all-members`,
      providesTags: [{type: "Member"}]
    }),

    // id로 멤버 정보 가져오기
    getMember: builder.query({
      query: (id) => `${END_POINT}/get/v1/id?id=${id}`,
      providesTags: [{type: "Member"}]
    }), 

    // 멤버 생성
    createMember: builder.mutation({
      query: (body) => ({
        url: `${END_POINT}/v1/create`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{type: "Member"}]
    }),

    // 멤버 정보 수정
    updateMember: builder.mutation({
      query: (body) => ({
        url: `${END_POINT}/v1/update`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{type: "Member"}]
    }),
    // http://bk.1ll.ca/api/member/v1/connect/baekjoon/2?name=chumjio1o
    // 백준 연동
    connectBaekjoon: builder.mutation({
      query: ({memberId, baekjoonId}) => ({
        url: `${END_POINT}/v1/connect/baekjoon/${memberId}?name=${baekjoonId}`,
        method: "POST",
      }),
      invalidatesTags: [{type: "Member"}]
    }),
    // 유저의 일주일 문제풀이 현황
    weeklyUserProblemStatus: builder.query({
      query: (id) => `${END_POINT}/get/v1/snapshot/week?id=${id}`,
      providesTags: [{type: "Member"}]
    }), 
  }),
});

export const { useGetMemberQuery, useCreateMemberMutation, useConnectBaekjoonMutation, useWeeklyUserProblemStatusQuery } = memberApi;
