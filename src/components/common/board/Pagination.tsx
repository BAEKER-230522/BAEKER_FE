import { S } from "./styled";

interface IPagination {
  onClickNext: () => void;
  onClickPrev: () => void;
  crntPageArray: number[];
  onClickPage: (num: number) => void;
  crntPage: number;
}

const Pagination = ({ onClickNext, onClickPrev, crntPageArray, onClickPage, crntPage }: IPagination) => {
  return (
    <S.PaginationContainer>
      <S.PrevBtn onClick={onClickPrev} />
      {crntPageArray.map((e) =>
        e === crntPage + 1 ? (
          <S.PaginationElement
            onClick={() => onClickPage(e)}
            style={{ background: "gray", borderRadius: "5px", padding: "5px" }}
            key={e}
          >
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
