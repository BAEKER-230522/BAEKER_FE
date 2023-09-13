import styled from "styled-components";
import { PageContainer } from "@/styles/common.style";

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

const Container = styled(PageContainer)`
  height: 95vh;
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

const S = {
  Container,
  Wrapper,
};
