import styled from "styled-components";

const Home = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <div>HOME</div>
      </S.Wrapper>
    </S.Container>
  );
};
export default Home;


const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("http://ec2-3-39-24-149.ap-northeast-2.compute.amazonaws.com:8080/images/welcome.jpg") no-repeat
    center fixed;
  background-size: cover;
  background-color: #2a303c;
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

