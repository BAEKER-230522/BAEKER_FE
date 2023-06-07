import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #2a303c;
`;

const Button = styled.button`
  width: 40%;
  background-color: aqua;
  height: 50px;
  border-radius: 10px;
  background-color: #661ae6;
  color: white;
  font-weight: 500;
  cursor: pointer;
  border: none;
`;

export const S = {
  Container,

  Button,
};
