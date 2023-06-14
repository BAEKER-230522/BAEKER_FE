import { S } from "./style";
import Board from "@/components/common/board/Board";

const AlgorithmRank = () => {
  return (
    <S.Container>
      <Board category={["랭킹", "이름", "가입한 스터디"]} widthRatio={[1, 1, 1]} />;
    </S.Container>
  );
};

export default AlgorithmRank;
