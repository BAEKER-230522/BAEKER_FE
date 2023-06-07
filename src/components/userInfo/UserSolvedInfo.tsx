import { S } from "./styled";

const UserSolvedInfo = () => {
  return (
    <S.Container>
      <div>
        <S.Title>Ranking</S.Title>
        <S.BigFont>31th</S.BigFont>
      </div>
      <S.Line></S.Line>
      <div>
        <S.Title>백준</S.Title>
        <div style={{ display: "flex", alignContent: "center" }}>
          <S.BigFont>341</S.BigFont>
          <S.SmallFont>문제 해결</S.SmallFont>
        </div>
      </div>
      <S.Line></S.Line>
      <div>
        <S.Title>프로그래머스</S.Title>
        <S.SmallFont>BAEKER 연동하기</S.SmallFont>
      </div>
    </S.Container>
  );
};

export default UserSolvedInfo;
