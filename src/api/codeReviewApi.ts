import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";
const USER_END_POINT = "usr/comm/web/post/v1";
const PUBLIC_END_POINT = "pub/comm/web/post/v1";
const USER_COMMENT_END_POINT = "usr/comm/web/comment/v1";
export const codeReviewApi = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "codeReviewAPi",
  tagTypes: ["CodeReview"],
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    //미션 번호와 문제 번호로 문제 제목 가져오기
    getUserCodeReviews: builder.query({
      query: ({ query }) => ({
        url: `${PUBLIC_END_POINT}/mission/${query.missionId}/${query.memberId}`,
        method: "GET",
      }),
      providesTags: ["CodeReview"],
    }),
    // problem status id로 코드 Get
    getCodeReview: builder.query({
      query: (problemStatusId) => ({
        url: `${PUBLIC_END_POINT}/problem-status/${problemStatusId}`,
        method: "GET",
      }),
      providesTags: ["CodeReview"],
    }),
    createCodeReview: builder.mutation({
      query: (data) => ({
        url: `${USER_END_POINT}/code-review`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["CodeReview"],
    }),
    postComment: builder.mutation({
      query: (data) => ({
        url: `${USER_COMMENT_END_POINT}`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["CodeReview"],
    }),
  }),
});

export const {
  usePostCommentMutation,
  useGetUserCodeReviewsQuery,
  useGetCodeReviewQuery,
  useCreateCodeReviewMutation,
} = codeReviewApi;
