import React, { useEffect } from "react";

interface IProps {
  ref: React.RefObject<HTMLDivElement>;
  isFocus: boolean;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const useOutsideClick = ({ ref, isFocus, setFocus, isOpened, setIsOpened }: IProps) => {
  console.log(isFocus, 1);

  const handleFocusOut = (event: MouseEvent) => {
    console.log(ref.current?.contains(event.target as Node), isFocus, 2);
    if (!ref.current?.contains(event.target as Node) && isOpened) {
      setFocus(false);
      setIsOpened(false);
    }
    if (!ref.current?.contains(event.target as Node) && !isOpened) {
      setIsOpened(true);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleFocusOut);
    return () => {
      window.removeEventListener("click", handleFocusOut);
    };
  });
};

export default useOutsideClick;
