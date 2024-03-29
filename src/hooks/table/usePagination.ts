import { useState, useEffect, useRef } from "react";

// logic
// 현재 페이지
// 이전 페이지, 다음 페이지
// 페이지 요소 5개 단위 자르기
// 5에서 6으로 넘어갈 때 다음 배열

interface IArg {
  crntPage: number;
  setCrntPage: React.Dispatch<React.SetStateAction<number>>;
  page: number[];
}

export const usePagination = ({ crntPage, setCrntPage, page }: IArg) => {
  const CONTENT_LIMIT = 4;
  // 현재 페이지

  // 현재 페이지 범위
  // range logic
  // 0 * 5, ( 1 * 5 ) - 1
  // ( 1 * 5 ), ( 2 * 5) - 1
  const crntRange = useRef<number>(0);

  // 현재 페이지 배열
  const [crntPageArray, setCrntPageArray] = useState<number[]>(
    page.slice(crntRange.current * CONTENT_LIMIT, crntRange.current * CONTENT_LIMIT + CONTENT_LIMIT)
  );

  const onClickNext = () => {
    if (crntPage < page.length - 1) {
      setCrntPage((prev) => prev + 1);
    }
  };

  const onClickPrev = () => {
    if (crntPage > 0) {
      setCrntPage((prev) => prev - 1);
    }
  };

  const onClickPage = (num: number) => {
    setCrntPage(num - 1);
  };

  useEffect(() => {
    if (Math.floor(crntPage / CONTENT_LIMIT) > crntRange.current) {
      crntRange.current += 1;
    } else if (Math.floor(crntPage / CONTENT_LIMIT) < crntRange.current) {
      crntRange.current -= 1;
    }
    setCrntPageArray(page.slice(crntRange.current * CONTENT_LIMIT, crntRange.current * CONTENT_LIMIT + CONTENT_LIMIT));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [crntPage]);

  return { crntPage, onClickNext, onClickPrev, crntPageArray, onClickPage };
};
