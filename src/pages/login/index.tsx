import styled from "styled-components";
import { PageContainer } from "@/styles/common.style";
import Loading from "@/components/common/loading/Loading";
import { useKakaoLogin } from "@/hooks/login/useKakaoLogin";

const Login = () => {
  useKakaoLogin();
  console.log("deploy issue");
  return (
    <S.Container>
      <S.BigFont>BAEKER</S.BigFont>
      <Loading />
    </S.Container>
  );
};

export default Login;

const Container = styled(PageContainer)`
  height: 86vh;
`;
const BigFont = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 30px;
`;

const S = { Container, BigFont };
