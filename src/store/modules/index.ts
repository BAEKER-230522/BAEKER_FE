// 리듀서 통합 모듈
import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import dropdown from "./dropdown";
import tab from "./tab";
import modify from "./modify";
import missionProblem from "./missionProblem";
import { memberApi } from "@/api/memberApi";
import { studyApi } from "@/api/studyApi";
import { ruleApi } from "@/api/ruleApi";
const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    // SSR 작업 수행 시 HYDRATE 라는 액션을 통해서 서버의 스토어와 클라이언트의 스토어를 합쳐주는 작업을 수행
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    // 정의한 리듀서 모듈들을 결합
    dropdown,
    tab,
    modify,
    missionProblem,
    [memberApi.reducerPath]: memberApi.reducer,
    [studyApi.reducerPath]: studyApi.reducer,
    [ruleApi.reducerPath]: ruleApi.reducer,
    // 리듀서 모듈(slice)을 추가할 때마다 combineReducers 함수의 인자로 전달되는 객체 내부에 추가해줘야함
  })(state, action);
};

export default reducer;
