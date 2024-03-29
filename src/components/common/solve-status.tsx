import { S } from "./style";

const SolveStatus = ({ studyInfo }: any) => {
  return (
    <S.StatusContainer>
      <S.StatusElement>
        <S.StatusTitle>스터디 랭킹</S.StatusTitle>
        <S.StatusNumber>{studyInfo.data.id}</S.StatusNumber>
      </S.StatusElement>
      <S.StatusElement>
        <S.StatusTitle>해결한 문제</S.StatusTitle>
        <S.StatusNumber>{studyInfo.data.solvedCount}</S.StatusNumber>
      </S.StatusElement>
      <S.StatusElement>
        <S.StatusTitle>경험치</S.StatusTitle>
        <S.StatusNumber>{studyInfo.data.xp}</S.StatusNumber>
      </S.StatusElement>
    </S.StatusContainer>
  );
};

export default SolveStatus;
