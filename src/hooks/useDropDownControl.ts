import { useEffect, Dispatch, SetStateAction } from "react";

interface IDropDownProps {
  dropdownState: boolean;
  setDropdownState: React.Dispatch<SetStateAction<boolean>>;
  dropdownRef: React.RefObject<HTMLDivElement>;
  type: "rank" | "menu";
}

export const useDropDownControl = ({ dropdownState, setDropdownState, dropdownRef, type }: IDropDownProps) => {
  useEffect(() => {
    console.log("드롭다운 시작2");
    const handleOutSideClick = (e: any) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setDropdownState(false);
      }
    };

    if (!dropdownState) {
      addEventListener("click", handleOutSideClick);
    }

    return () => {
      removeEventListener("click", handleOutSideClick);
    };
  }, [dropdownState]);
};
