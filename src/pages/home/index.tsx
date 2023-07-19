import { S } from "./style";

const Home = () => {

  const onClick = async() => {
    window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}oauth2/authorization/kakao`
  }

  return (
    <S.Container>
      <S.Wrapper>
        <div>
          알고리즘 실력 향상은 BAEKER!
          <br />
          알고리즘 공부를 위한 스터디 그룹을 만들고 가입하세요.
          <br />
          다양한 규칙 수행 보상을 통해 스터디 랭커에 도전해 보세요!
        </div>
        <S.KakaoButton onClick={onClick}/>
      </S.Wrapper>
    </S.Container>
  );
};
export default Home;
