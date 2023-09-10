import { S } from "./style";
import { usePagination } from "@/hooks/usePagination";
import { useTable } from "./context/TableContext";

const Pagination = () => {
  const { data, crntPage, setCrntPage } = useTable();
  const PAGENATION_ARR = Array.from({ length: Math.ceil(data?.length / 4) }, (_, idx: number) => idx + 1);
  const { onClickNext, onClickPrev, crntPageArray, onClickPage } = usePagination({
    page: PAGENATION_ARR,
    crntPage: crntPage!,
    setCrntPage: setCrntPage!,
  });
  return (
    <S.PaginationContainer>
      <S.PrevBtn onClick={onClickPrev} />
      {crntPageArray.map((e) =>
        e === crntPage! + 1 ? (
          <S.SelectedPaginationElement onClick={() => onClickPage(e)} key={e}>
            {e}
          </S.SelectedPaginationElement>
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
