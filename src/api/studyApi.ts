import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const END_POINT = "api/study/v1";
const END_POINT_2 = "api/my-study/v1"
const END_POINT_3 = "api/studyrule/v1"

// baseQuery, reducerPath, tagTypes, endpoints,
export const studyApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  reducerPath: "studyApi",
  tagTypes: ["Study"],
  endpoints: (builder) => ({
    // 스터디 페이징 조회
    getStudyInfoList: builder.query({
      query: (page) => `${END_POINT}/list?page=${page}`,
      providesTags: ["Study"],
    }),

    // id로 스터디 조회
    getStudyInfo: builder.query({
      query: (id) => `${END_POINT}/id?id=${id}`,
      providesTags: ["Study"],
    }),

    // member id로 가입한 모든 study 조회하기
    getUserStudyList: builder.query({
      query: ({memberId, status}) => `${END_POINT}/member/${memberId}?status=${status}`,
      providesTags: ["Study"],
    }),
    
    // study id로 study member list 조회하기
    getStudyMemberList : builder.query({
      query: (id) => `${END_POINT}/member-list/${id}`,
      providesTags: ["Study"],
    }),

    // 가입대기 리스트 조회하기
    getPendingList : builder.query({
      query: (id) => `${END_POINT}/candidate-list/${id}`,
      providesTags: ["Study"],
    }),


    // 스터디 미션 스터디 Id로 조회
    getStudyRuleList: builder.query({
      query: (id) => ({
        url: `${END_POINT_3}/studyrules/${id}`,
        method: "GET",
      }),
      providesTags: (result:any, err:any, arg:any) => {return [{type: "Study", id:Number(arg.id)}]},
    }),

    // 스터디 미션
    createStudyMission: builder.mutation({
      query: (body) => ({
        url: `${END_POINT_3}/studyrules`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result:any, err:any, arg:any) => {return [{type: "Study", id:Number(arg.studyId)}]},
    }),
    


    // study 생성
    createStudy: builder.mutation({
      query: (body) => ({
        url: `${END_POINT}/create`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{type: "Study"}]
    }),
    

    // study 이름/소개/인원 수정
    updateStudy: builder.mutation({
      query: (body) => ({
        url: `${END_POINT}/update`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{type: "Study"}]
    }),

    // study 리더 수정
    updateStudyLeader: builder.mutation({
      query: (body) => ({
        url: `${END_POINT}/leader`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{type: "Study"}]
    }),

    // 스터디 가입 신청
    joinStudy: builder.mutation({
      query: (body) => ({
        url: `${END_POINT_2}/join`,
        method: "POST",
        body
      }),
      invalidatesTags: [{type: "Study"}]
    }),

    // 스터디 가입 초대
    inviteStudy: builder.mutation({
      query: (body) => ({
        url: `${END_POINT_2}/invite`,
        method: "POST",
        body
      }),
      invalidatesTags: [{type: "Study"}]
    }),

     // 스터디 가입 승인
     acceptStudy: builder.mutation({
      query: (body) => ({
        url: `${END_POINT_2}/accept`,
        method: "POST",
        body
      }),
      invalidatesTags: [{type: "Study"}]
    }),

    // 스터디 가입 거절
      refuseStudy: builder.mutation({
      query: (body) => ({
        url: `${END_POINT_2}`,
        method: "DELETE",
        body
      }),
      invalidatesTags: [{type: "Study"}]
    }),

    // 스터디 미션 수정
      updateStudyMission: builder.mutation({
      query: ({id, body}) => ({
        url: `${END_POINT_3}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{type: "Study"}]
    }),

    // 스터디 미션 삭제
    deleteStudyMission: builder.mutation({
      query: (missionId) => ({
        url: `${END_POINT_3}/studyrules/${missionId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{type: "Study"}]
    }),


    // 스터디 미션 개별 조회
    getStudyMission : builder.query({
      query: (id) => `${END_POINT_3}/search/${id}`,
      providesTags: ["Study"],
    }),



    

  }),
});

export const { useGetStudyInfoListQuery, useGetStudyInfoQuery, useCreateStudyMutation, useGetUserStudyListQuery, useGetStudyMemberListQuery, useGetPendingListQuery, useCreateStudyMissionMutation, useGetStudyRuleListQuery, useGetStudyMissionQuery } = studyApi;
