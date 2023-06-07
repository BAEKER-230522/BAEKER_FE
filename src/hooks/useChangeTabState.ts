import { useSelector, useDispatch } from "react-redux";
import * as action from "@/store/modules/tab";

export const useChangeTabState = (type: string) => {
  const dispatch = useDispatch();
  const tabState = useSelector((state: any) => {
    switch (type) {
      case "profile":
        return state.tab.profileTabState;
      case "study":
        return state.tab.studyTabState;
    }
  });

  const handleTabState = (num: number) => {
    switch (type) {
      case "profile":
        dispatch(action.changeProfileTabState(num));
      case "study":
        dispatch(action.changeStudyTabState(num));
    }
  };

  return { tabState, handleTabState };
};
