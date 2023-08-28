import styled from "styled-components";
import { themedPalette } from "@/styles/theme";
import { AiOutlineSearch } from "react-icons/ai";
const Container = styled.div`
  width: 80%;
  height: 70px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Input = styled.input`
  border: 0.7px solid #9da4b2;
  height: 45px;
  width: 200px;
  border-radius: 5px;
  background-color: transparent;
  padding: 0px 10px;
  font-size: 1rem;
  font-weight: 700;
  color: #9da4b2;
  outline: none;
`;

const Button = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 5px;
  background-color: ${themedPalette.bg_element4};
  color : ${themedPalette.text2};
  margin-left: 15px;
  border: none;
  cursor: pointer;
`;

const SearchSVG = styled(AiOutlineSearch)`
  width: 30px;
  height: 30px;
  color: ${themedPalette.bg_element};
`;

const CreateButton = styled(Button)`
  background-color: ${themedPalette.bg_element4};
  width: 100px;
  color: ${themedPalette.text2};
  font-weight: 600;
  margin-right: auto;
  margin-left: 0;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RadioBtnGroupContainer = styled.div`
  display: flex;
  flex-direction : row;
`

const Label = styled.label`
  color : #9da4b2;
  font-weight: 700;
  font-size: 1.2rem;
`

const RadioContainer = styled.div`
  margin-right: 7px;
  margin-bottom : 30px;
`

const Title = styled.span`
font-size: 1rem;
font-weight: 700;
color: #a6adbb;
margin-bottom: 20px;
`;

export const S = { Container, Input, Button, SearchSVG, CreateButton, InputContainer,RadioBtnGroupContainer, Label, RadioContainer, Title};
