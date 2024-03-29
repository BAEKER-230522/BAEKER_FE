// 스토어 생성, wrapper 생성
// store > index.js

import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
// redux-logger:
// log 에 색을 입혀주거나, 리덕스 동작에 대한 것을 자세하고 편하게 log 에서 확인할 수 있도록 만들어진 리덕스 미들웨어

import reducer from "./modules";
import { memberApi } from "@/api/memberApi";
import { studyApi } from "@/api/studyApi";
import { solvedApi } from "@/api/solvedApi";
import { codeReviewApi } from "@/api/codeReviewApi";

const makeStore = (context: any) =>
  configureStore({
    // configureStore: store 를 생성
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(memberApi.middleware)
        .concat(studyApi.middleware)
        .concat(solvedApi.middleware)
        .concat(codeReviewApi.middleware),

    // redux-toolkit 은 devTools 등의 미들웨어들을 기본적으로 제공 (사용하고 싶은 미들웨어가 있다면 추가로 정의 ex.logger)
    devTools: process.env.NODE_ENV !== "production",
  });

const wrapper = createWrapper(makeStore, {
  // createWrapper: wrapper 생성, wrapper 에 store 바인딩
  debug: process.env.NODE_ENV !== "production",
});

export default wrapper;
