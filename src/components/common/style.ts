import styled from "styled-components";
import { FaMedal } from "react-icons/fa";

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({theme}) => theme.backgroundColor};
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  font-weight: 700;
  border-bottom: 2px solid ${({theme}) => theme.border};;
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
  color: ${({theme}) => theme.color};
`;

const IconContainer = styled.div`
  width: 200px;
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
  margin-bottom: 50px;
  border-radius: 7px;
  border: 0.6px solid #a6adbb;
  background-color: ${({theme}) => theme.wrapperBgColor};
  color: ${({theme}) => theme.color};
  padding-left: 10px;
  outline: none;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme}) => theme.color};
  margin-bottom: 10px;
`;

const InputContainer = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
`
const Button = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 7px;
  outline: none;
  margin-left: 15px;
  
`

const StatusContainer = styled.div`
  width: 80%;
  height: 120px;
  background-color: ${({theme}) => theme.wrapperBgColor_2};
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
`;

const StatusElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  &:last-child {
    border: none;
  }
  border-right: 1px solid ${({theme}) => theme.wrapperBgColor};
`;

const StatusTitle = styled.span`
  font-weight: 600;
  font-size: 1rem;
  color: ${({theme}) => theme.color};
`;

const StatusNumber = styled.span`
  font-weight: 700;
  font-size: 2.7rem;
  &:nth-child(2) {
    color: #661ae6;
  }
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
  StatusContainer,
  StatusElement,
  StatusTitle,
  StatusNumber,
  InputWrapper,
  Button
};
