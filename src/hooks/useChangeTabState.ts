import { useSelector, useDispatch } from "react-redux";
import * as action from "@/store/modules/tab";

export const useChangeTabState = () => {
  const dispatch = useDispatch();
  const tabState = useSelector((state: any) => {
    return state.tab.tabState;
  });

  const handleTabState = (num: number) => {
    dispatch(action.changeTabState(num));
  };

  return { tabState, handleTabState };
};
