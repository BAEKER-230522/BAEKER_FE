import styled from "styled-components";
import { themedPalette } from "@/styles/theme";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40vh;
  margin-bottom: 50px;
  background-color: ${themedPalette.bg_element2};
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

  button {
    height: 40px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color: ${themedPalette.bg_element4};
    color: ${themedPalette.text2};
  }
`;

const Title = styled.div`
  font-size: 2.4rem;
  color: ${themedPalette.text1};
  margin-bottom: 20px;
`;

const About = styled.p`
  margin-bottom: 20px;
  color: ${themedPalette.text3};
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-around;
`;

const SelectBoxContainer = styled.select`
  width: 40%;
  height: 50px;
  margin-bottom: 30px;
  background-color: transparent;
  color: white;
  padding: 10px;
`;

export const S = {
  Container,
  Img,
  StudyInfoContainer,
  ButtonWrapper,
  Title,
  About,
  SelectBoxContainer,
};
