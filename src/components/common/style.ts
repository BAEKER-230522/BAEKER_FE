import styled from "styled-components";
import { FaMedal } from "react-icons/fa";
import { themedPalette } from "@/styles/theme";

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
  border: none;
  background-color: ${themedPalette.bg_element};
  color: ${themedPalette.text1};
  padding-left: 10px;
  outline: none;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${themedPalette.text1};
  margin-bottom: 10px;
`;

const InputContainer = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
`;
const Button = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 7px;
  outline: none;
  margin-left: 15px;
  border: none;
  color: ${themedPalette.text2};
  background-color: ${themedPalette.bg_element4};
  cursor: pointer;
`;

const StatusContainer = styled.div`
  width: 80%;
  height: 120px;
  background-color: ${themedPalette.bg_element};
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
  border-right: 1px solid ${themedPalette.bg_element2};
`;

const StatusTitle = styled.span`
  font-weight: 600;
  font-size: 1rem;
  color: ${themedPalette.text1};
`;

const StatusNumber = styled.span`
  font-weight: 700;
  font-size: 2.7rem;
  margin-top: 10px;
  &:nth-child(2) {
    color: ${themedPalette.bg_element4};
  }
`;

export const S = {
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
  Button,
};
