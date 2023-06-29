import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const END_POINT = "api/study/v1/";
const BASE_URL = "http://101.101.208.240:9000/";

// baseQuery, reducerPath, tagTypes, endpoints,
export const studyApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
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

    // study 생성
    createStudy: builder.mutation({
      query: (body) => ({
        url: `${END_POINT}/create`,
        method: "POST",
        body,
      }),
    }),

    // study 이름/소개/인원 수정
    updateStudy: builder.mutation({
      query: (body) => ({
        url: `${END_POINT}/update`,
        method: "POST",
        body,
      }),
    }),

    // study 리더 수정
    updateStudyLeader: builder.mutation({
      query: (body) => ({
        url: `${END_POINT}/leader`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetStudyInfoListQuery, useGetStudyInfoQuery, useCreateStudyMutation } = studyApi;