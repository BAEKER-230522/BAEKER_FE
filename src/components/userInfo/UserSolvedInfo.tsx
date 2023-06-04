import { S } from "./styled";

const UserSolvedInfo = () => {
  return (
    <S.Container>
      <div>
        <h2>Ranking</h2>
        <div>31th</div>
      </div>
      <S.Line></S.Line>
      <div>
        <h2>백준</h2>
        <div>341 문제 해결</div>
      </div>
      <S.Line></S.Line>
      <div>
        <h2>프로그래머스</h2>
        <div>BAEKER 연동하기</div>
      </div>
    </S.Container>
  );
};

export default UserSolvedInfo;
