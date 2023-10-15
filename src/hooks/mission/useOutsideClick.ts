import React, { useEffect } from "react";

interface IProps {
  ref: React.RefObject<HTMLDivElement>;
  isInit: boolean;
  setIsInit: React.Dispatch<React.SetStateAction<boolean>>;
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const useOutsideClick = ({ ref, isInit, setIsInit, isOpened, setIsOpened }: IProps) => {
  const handleFocusOut = (event: MouseEvent) => {
    console.log(ref.current?.contains(event.target as Node));
    // 최초 모달 오픈
    if (isInit) {
      setIsInit(false);
      return;
    }
    // 모달 밖 클릭 & 모달 열려 있을 경우
    if (!ref.current?.contains(event.target as Node) && isOpened) {
      setIsOpened(false);
      setIsInit(false);
    }
    // 모달 밖 클릭 & 모달 열려 있지 않은 경우
    if (!ref.current?.contains(event.target as Node) && !isOpened) {
      setIsOpened(false);
      setIsInit(false);
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
