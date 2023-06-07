import styled from "styled-components";
import { FaMedal } from "react-icons/fa";
const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #4b5563;
  display: flex;
  align-items: center;
  color: #a6adbb;
  font-weight: 700;
  a {
    text-decoration: none;
  }
`;

const Logo = styled.a`
  width: 70px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: 20px;
  color: #9da4b2;
`;

const IconContainer = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 30px;
  margin-left: auto;
`;

const DropDownIcon = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  background-color: black;
`;

const MedalIcon = styled(FaMedal)`
  position: relative;
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
  border-radius: 7px;
  border: 0.6px solid #a6adbb;
  background-color: transparent;
  color: white;
  padding-left: 10px;
  outline: none;
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #a6adbb;
  margin-bottom: 10px;
`;

const InputContainer = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  display: flex;
  flex-direction: column;
`;
export const S = {
  HeaderContainer,
  Logo,
  IconContainer,
  DropDownIcon,
  Input,
  Title,
  InputContainer,
  MedalIcon,
};
