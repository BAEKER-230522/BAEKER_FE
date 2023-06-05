import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  margin: 60px 0px 40px 0px;
  width: 50%;
  display: flex;
  justify-content: center;
`;

const RecordContainer = styled.div`
  width: 80%;
  height: 65vh;
  display: flex;
  background-color: beige;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 100px;
`;

export const S = {
  Container,
  InfoContainer,
  RecordContainer,
};
