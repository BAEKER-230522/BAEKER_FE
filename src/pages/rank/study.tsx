import { S } from "./style";
import Board from "@/components/common/board/Board";

const StudyRank = () => {
  return (
    <S.Container>
      <Board category={["랭킹", "스터디", "소개", "인원", "방장"]} widthRatio={[1, 1, 2, 1, 1]} />;
    </S.Container>
  );
};

export default StudyRank;
