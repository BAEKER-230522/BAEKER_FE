import React, { useEffect } from "react";

interface IProps {
  ref: React.RefObject<HTMLDivElement>;
  isFocus: boolean;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

const useOutsideClick = ({ ref, isFocus, setFocus }: IProps) => {
  const handleFocusOut = (event: MouseEvent) => {
    if (!ref.current?.contains(event.target as Node) && !isFocus) {
      setFocus(false);
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
