import { S } from "./style";

const RuleDetail = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.Title>규칙 명</S.Title>
          <S.Content>test</S.Content>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.Title>문제풀이 수</S.Title>
          <S.Content>3</S.Content>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.Title>난이도</S.Title>
          <S.Content>GOLD</S.Content>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.Title>획득 경험치</S.Title>
          <S.Content>4</S.Content>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.Title>OJ 사이트</S.Title>
          <S.Content>BaekJoon</S.Content>
        </S.ContentWrapper>
      </S.Wrapper>
      <S.ButtonContainer>
        <S.Button>목록</S.Button>
        <S.Button>삭제</S.Button>
        <S.Button>수정</S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default RuleDetail;
