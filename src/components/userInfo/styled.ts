import styled from "styled-components";

const Container = styled.div`
  width: 280px;
  height: 350px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 7px;
  margin: 5px;
`;

const Image = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-color: aqua;
`;

const Button = styled.button`
  width: 120px;
  height: 50px;
  background-color: aqua;
  border-radius: 10px;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: black;
`;

export const S = {
  Container,
  Image,
  Button,
  Line,
};
