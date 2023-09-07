import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";
const END_POINT = "api/study/v1";
const END_POINT_2 = "api/my-study/v1";
const END_POINT_3 = "api/studyrule/v1";
const END_POINT_4 = "api/studyrule/v2";

// baseQuery, reducerPath, tagTypes, endpoints,
export const studyApi = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "studyApi",
  tagTypes: ["Study"],
  endpoints: (builder) => ({
    // 스터디 페이징 조회
    getStudyInfoList: builder.query({
      query: (page) => ({
        url: `${END_POINT}/list?page=${page}`,
        method: "GET",
      }),
      providesTags: ["Study"],
    }),

    // 스터디 랭킹순 조회
    getAllStudyList: builder.query({
      query: ({ page, limit }) => ({
        url: `${END_POINT}/ranking?page=${page}&content=${limit}`,
        method: "GET",
      }),
      providesTags: ["Study"],
    }),

    // id로 스터디 조회
    getStudyInfo: builder.query({
      query: (id) => ({
        url: `${END_POINT}/id?id=${id}`,
        method: "GET",
      }),
      providesTags: ["Study"],
    }),
    // 스터디 일주일 문제풀이 현황
    weeklyStudyProblemStatus: builder.query({
      query: (id) => ({
        url: `${END_POINT}/snapshots?id=${id}`,
        method: "GET",
      }),
      providesTags: ["Study"],
    }),

    // member id로 가입한 모든 study 조회하기
    getUserStudyList: builder.query({
      query: ({ memberId, status }) => ({
        url: `${END_POINT}/member/${memberId}?status=${status}`,
        method: "GET",
      }),

      providesTags: ["Study"],
    }),

    // study id로 study member list 조회하기
    getStudyMemberList: builder.query({
      query: (id) => ({
        url: `${END_POINT}/member-list/${id}`,
        method: "GET",
      }),
      providesTags: ["Study"],
    }),

    // 가입대기 리스트 조회하기
    getPendingList: builder.query({
      query: (id) => ({
        url: `${END_POINT}/candidate-list/${id}`,
        method: "GET",
      }),
      providesTags: ["Study"],
    }),

    // 스터디 미션 스터디 Id로 조회
    getStudyRuleList: builder.query({
      query: (id) => ({
        url: `${END_POINT_3}/studyrules/${id}`,
        method: "GET",
      }),
      providesTags: (result: any, err: any, arg: any) => {
        return [{ type: "Study", id: Number(arg.id) }];
      },
    }),

    // 스터디 미션 Id로 조회
    getStudyRule: builder.query({
      query: (id) => ({
        url: `${END_POINT_4}/search/${id}`,
        method: "GET",
      }),
      providesTags: (result: any, err: any, arg: any) => {
        return [{ type: "Study", id: Number(arg.id) }];
      },
    }),

    // 스터디 미션
    createStudyMission: builder.mutation({
      query: (data) => ({
        url: `${END_POINT_3}/studyrules`,
        method: "POST",
        data,
      }),
      invalidatesTags: (result: any, err: any, arg: any) => {
        return [{ type: "Study", id: Number(arg.studyId) }];
      },
    }),

    // study 생성
    createStudy: builder.mutation({
      query: (data) => ({
        url: `${END_POINT}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [{ type: "Study" }],
    }),

    // study 이름/소개/인원 수정
    updateStudy: builder.mutation({
      query: (data) => ({
        url: `${END_POINT}/update`,
        method: "POST",
        data,
      }),
      invalidatesTags: [{ type: "Study" }],
    }),

    // study 리더 수정
    updateStudyLeader: builder.mutation({
      query: (data) => ({
        url: `${END_POINT}/leader`,
        method: "POST",
        data,
      }),
      invalidatesTags: [{ type: "Study" }],
    }),

    // 스터디 가입 신청
    joinStudy: builder.mutation({
      query: (data) => ({
        url: `${END_POINT_2}/join`,
        method: "POST",
        data,
      }),
      invalidatesTags: [{ type: "Study" }],
    }),

    // 스터디 탈퇴
    resignStudy: builder.mutation({
      query: (data) => ({
        url: `${END_POINT_2}`,
        method: "DELETE",
        data,
      }),
      invalidatesTags: [{ type: "Study" }],
    }),

    // 스터디 가입 초대
    inviteStudy: builder.mutation({
      query: (data) => ({
        url: `${END_POINT_2}/invite`,
        method: "POST",
        data,
      }),
      invalidatesTags: [{ type: "Study" }],
    }),

    // 스터디 가입 승인
    acceptStudy: builder.mutation({
      query: (data) => ({
        url: `${END_POINT_2}/accept`,
        method: "POST",
        data,
      }),
      invalidatesTags: [{ type: "Study" }],
    }),

    // 스터디 가입 거절
    refuseStudy: builder.mutation({
      query: (data) => ({
        url: `${END_POINT_2}`,
        method: "DELETE",
        data,
      }),
      invalidatesTags: [{ type: "Study" }],
    }),

    // 스터디 미션 수정
    updateStudyMission: builder.mutation({
      query: ({ id, data }) => ({
        url: `${END_POINT_3}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [{ type: "Study" }],
    }),

    // 스터디 미션 삭제
    deleteStudyMission: builder.mutation({
      query: (missionId) => ({
        url: `${END_POINT_3}/studyrules/${missionId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Study" }],
    }),

    // 스터디 미션 개별 조회
    getStudyMission: builder.query({
      query: (id) => ({
        url: `${END_POINT_3}/search/${id}`,
        method: "GET",
      }),
      providesTags: ["Study"],
    }),
  }),
});

export const {
  useWeeklyStudyProblemStatusQuery,
  useGetStudyInfoListQuery,
  useGetStudyInfoQuery,
  useCreateStudyMutation,
  useGetUserStudyListQuery,
  useGetStudyMemberListQuery,
  useGetPendingListQuery,
  useCreateStudyMissionMutation,
  useGetStudyRuleListQuery,
  useGetStudyMissionQuery,
  useGetAllStudyListQuery,
  useAcceptStudyMutation,
  useDeleteStudyMissionMutation,
  useRefuseStudyMutation,
  useInviteStudyMutation,
  useJoinStudyMutation,
  useResignStudyMutation,
  useGetStudyRuleQuery,
} = studyApi;
