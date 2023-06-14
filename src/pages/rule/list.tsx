import Board from "@/components/common/board/Board";
import Search from "@/components/rule/search";
import { S } from "./style";

const Rule = () => {
  return (
    <S.Container>
      <Search />
      <Board category={["번호", "제목", "OJ 사이트", "작성일"]} widthRatio={[1, 1, 1, 2]} />;
    </S.Container>
  );
};

export default Rule;
