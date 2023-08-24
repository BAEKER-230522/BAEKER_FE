import styled from "styled-components";
import { PageContainer } from "@/styles/common.style";

const Home = () => {
  const onClick = async() => {
    window.location.href = `${process.env.NEXT_PUBLIC_LOGIN_URL}oauth2/authorization/kakao`
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

const Container = styled(PageContainer)`
`;

const Wrapper = styled.div`
  width: 50%;
  height: 70%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #a6adbb;
  text-align: center;
  font-size: 1.4rem;
  line-height: 1.9rem;
`;

const KakaoButton = styled.button`
  width: 180px;
  height: 50px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  outline: none;
  background: url("http://ec2-3-39-24-149.ap-northeast-2.compute.amazonaws.com:8080/images/kakao_login.png");
  background-repeat: no-repeat;
  object-fit: cover;
  cursor: pointer;
`;

const S = {
  Container,
  Wrapper,
  KakaoButton,
};

