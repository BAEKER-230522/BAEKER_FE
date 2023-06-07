import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35vh;
  margin-bottom: 50px;
  background-color: #242933;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin-left: 50px;
`;

const StudyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  height: 35%;
  justify-content: space-between;

  div {
    font-size: 2.4rem;
    color: #a6adbb;
  }
  button {
    height: 40px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color: #661ae6;
    color: white;
  }
`;

export const S = { Container, Img, StudyInfoContainer };
