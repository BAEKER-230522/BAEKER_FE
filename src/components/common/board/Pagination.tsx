import { S } from "./styled";
import { usePagination } from "@/hooks/usePagination";

const Pagination = ({ test }: { test: number }) => {
  const _test = Array.from({ length: 10 * test }, (_, idx: number) => idx + 1);

  const { crntPage, onClickNext, onClickPrev, crntPageArray, onClickPage } = usePagination(_test!);
  console.log(test, crntPage);
  return (
    <S.PaginationContainer>
      <S.PrevBtn onClick={onClickPrev} />
      {crntPageArray.map((e) =>
        e === crntPage + 1 ? (
          <S.PaginationElement onClick={() => onClickPage(e)} style={{ background: "red" }} key={e}>
            {e}
          </S.PaginationElement>
        ) : (
          <S.PaginationElement onClick={() => onClickPage(e)} key={e}>
            {e}
          </S.PaginationElement>
        )
      )}
      <S.NextBtn onClick={onClickNext} />
    </S.PaginationContainer>
  );
};

export default Pagination;
