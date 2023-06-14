import { S } from "./styled";
import Header from "./Header";
import Content from "./Content";
import Pagination from "./Pagination";
import { usePagination } from "@/hooks/usePagination";

export interface IBoard {
  category?: string[];
  target_nth?: number;
  ratio?: number;
  widthRatio?: number[];
  crntPage?: number;
}

const Board = ({ category, widthRatio }: IBoard) => {
  const ratioSum = widthRatio?.reduce((a, b) => a + b, 0);
  const ratio = Math.floor(100 / ratioSum!);
  const target_nth = widthRatio?.findIndex((e) => e !== 1);
  const _test = Array.from({ length: 10 }, (_, idx: number) => idx + 1);
  const { crntPage, onClickNext, onClickPrev, crntPageArray, onClickPage } = usePagination(_test!);

  return (
    <S.Container>
      <Header category={category} target_nth={target_nth} ratio={ratio} />
      <Content target_nth={target_nth} ratio={ratio} crntPage={crntPage} />
      <Pagination
        onClickNext={onClickNext}
        onClickPrev={onClickPrev}
        crntPageArray={crntPageArray}
        onClickPage={onClickPage}
        crntPage={crntPage}
      />
    </S.Container>
  );
};

export default Board;
