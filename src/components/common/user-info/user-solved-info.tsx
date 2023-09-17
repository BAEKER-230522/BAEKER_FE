import { S } from "./style";

const UserSolvedInfo = ({ userData }: any) => {
  const SOLVEDCOUNT =
    userData.bronze + userData.diamond + userData.gold + userData.ruby + userData.silver + userData.platinum;
  return (
    <S.Container>
      <S.InfoContainer>
        <S.Title>랭킹</S.Title>
        <div style={{ display: "flex", alignContent: "center" }}>
          <S.BigFont>{userData.ranking}</S.BigFont>
          <S.SmallFont>등</S.SmallFont>
        </div>
      </S.InfoContainer>
      <S.Line></S.Line>
      <S.InfoContainer>
        <S.Title>백준</S.Title>
        <div style={{ display: "flex", alignContent: "center" }}>
          <S.BigFont>{SOLVEDCOUNT}</S.BigFont>
          <S.SmallFont>문제 해결</S.SmallFont>
        </div>
      </S.InfoContainer>
    </S.Container>
  );
};

export default UserSolvedInfo;
