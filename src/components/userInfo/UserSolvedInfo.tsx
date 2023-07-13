import { S } from "./style";
import { IUserData } from "@/pages/member/[detail]";

const UserSolvedInfo = ({userData}: any) => {
  const SOLVEDCOUNT = userData.bronze + userData.diamond + userData.gold + userData.ruby + userData.silver + userData.platinum
  return (
    <S.Container>
      <div>
        <S.Title>Ranking</S.Title>
        <S.BigFont>{userData.id}th</S.BigFont>
      </div>
      <S.Line></S.Line>
      <div>
        <S.Title>백준</S.Title>
        <div style={{ display: "flex", alignContent: "center" }}>
          <S.BigFont>{SOLVEDCOUNT}</S.BigFont>
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
