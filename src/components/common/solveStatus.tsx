import { S } from "./style";

const SolveStatus = () => {
  return (
    <S.StatusContainer>
      <S.StatusElement>
        <S.StatusTitle>스터디 랭킹</S.StatusTitle>
        <S.StatusNumber>25th</S.StatusNumber>
      </S.StatusElement>
      <S.StatusElement>
        <S.StatusTitle>해결한 문제</S.StatusTitle>
        <S.StatusNumber>25th</S.StatusNumber>
      </S.StatusElement>
      <S.StatusElement>
        <S.StatusTitle>해결한 미션</S.StatusTitle>
        <S.StatusNumber>25th</S.StatusNumber>
      </S.StatusElement>
    </S.StatusContainer>
  );
};

export default SolveStatus;
