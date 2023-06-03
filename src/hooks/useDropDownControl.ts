import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../store/modules/dropdown";

export const useDropDownControl = () => {
  const dropdownRef = useRef<HTMLElement>(null);
  const iconRef = useRef<HTMLElement>(null);
  console.log("drop:", dropdownRef, "icon:", iconRef);

  const dispatch = useDispatch();
  const dropdownState = useSelector((state: any) => {
    return state.dropdown.dropdownState;
  });

  useEffect(() => {
    const handleOutSideClick = (e: any) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        console.log("outside click");

        dispatch(userActions.initDropdownState());
      }
    };

    if (dropdownState[0] === 1 || dropdownState[1] === 1) {
      addEventListener("click", handleOutSideClick);
    }

    return () => {
      removeEventListener("click", handleOutSideClick);
    };
  });
  return { dropdownRef, iconRef };
};
