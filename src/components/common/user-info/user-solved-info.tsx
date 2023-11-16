import { S } from "./style";
import { useRouter } from "next/router";
const UserSolvedInfo = ({ userData }: any) => {
  const router = useRouter();
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
      <S.Button onClick={() => router.push({ pathname: "/study/manage" })}>스터디 생성</S.Button>
    </S.Container>
  );
};

export default UserSolvedInfo;
