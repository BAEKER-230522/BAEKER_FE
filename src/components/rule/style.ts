import styled from "styled-components";
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
  background-color: #191d24;
  margin-left: 15px;
  border: none;
  cursor: pointer;
`;

const SearchSVG = styled(AiOutlineSearch)`
  width: 30px;
  height: 30px;
  color: #9da4b2;
`;

const CreateButton = styled(Button)`
  background-color: #661ae6;
  width: 100px;
  color: white;
  font-weight: 600;
  margin-right: auto;
  margin-left: 0;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const S = { Container, Input, Button, SearchSVG, CreateButton, InputContainer };
