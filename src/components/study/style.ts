import styled from "styled-components";
import { themedPalette } from "@/styles/theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
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
  margin-left: 30px;
  height: 100%;
  justify-content: center;
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

type ButtonWrapperProps = {
  width: string;
};

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  max-width: ${(props) => props.width};
  justify-content: space-around;

  button {
    font-weight: 600;
    height: 40px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color: ${themedPalette.bg_element4};
    color: ${themedPalette.text2};
    padding: 0px 17px;
  }
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
