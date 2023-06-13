import { S } from "./styled";
import Header from "./Header";
import Content from "./Content";
import Pagination from "./Pagination";

export interface IBoard {
  category?: string[];
  target_nth?: number;
  ratio?: number;
  widthRatio?: number[];
  test?: number;
}

const Board = ({ category, widthRatio, test }: IBoard) => {
  const ratioSum = widthRatio?.reduce((a, b) => a + b, 0);
  const ratio = Math.floor(100 / ratioSum!);
  const target_nth = widthRatio?.findIndex((e) => e !== 1);
  return (
    <S.Container>
      <Header category={category} target_nth={target_nth} ratio={ratio} />
      <Content target_nth={target_nth} ratio={ratio} />
      <Pagination test={test!} />
    </S.Container>
  );
};

export default Board;
