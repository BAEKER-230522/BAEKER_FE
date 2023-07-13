import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const END_POINT = "api/member";
export const memberApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL}),
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
  }),
});

export const { useGetAllMembersQuery, useGetMemberQuery, useCreateMemberMutation } = memberApi;
