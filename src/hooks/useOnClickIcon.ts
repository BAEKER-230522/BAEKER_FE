import { useSelector, useDispatch } from "react-redux";
import * as userActions from "@/store/modules/dropdown";

export const useOncClickIcon = () => {
  const dispatch = useDispatch(); // 액션을 적용해줄 dispatch
  const dropdownState = useSelector((state: any) => {
    return state.dropdown.dropdownState;
  }); // state 가져오기

  const changeDropdownState = (type: number) => {
    // 원하는 dropdown target 상태 변경하기
    dispatch(userActions.changeDropdownState(type));
  };

  return { dropdownState, changeDropdownState };
};
