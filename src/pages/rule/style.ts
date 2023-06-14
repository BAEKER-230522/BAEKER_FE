import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #2a303c;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  width: 30%;
  height: 60%;
  background-color: white;
  border-radius: 10px;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  color: #a6adbb;
`;

const Content = styled.span`
  font-size: 1.2rem;
  color: #2a303c;
  margin-top: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 33%;
  justify-content: space-around;
  height: 40px;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 31%;
  height: 40px;
  border-radius: 5px;
  background-color: #661ae6;
  color: white;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;

export const S = { Container, Wrapper, Title, Content, ContentWrapper, ButtonContainer, Button };
