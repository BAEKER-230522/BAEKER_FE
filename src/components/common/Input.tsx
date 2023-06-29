import React from "react";
import { S } from "./styled";
import { IUserInfo } from "@/pages/modify";

interface IInput {
  title: string;
  size: string;
  value : string;
  userInfo : IUserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<IUserInfo>>;
}

const Input = ({ title, size, value, setUserInfo, userInfo }: IInput) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(title === "이름"){
      setUserInfo({...userInfo, nickname:e.target.value})
    }else{
      setUserInfo({...userInfo, about: e.target.value})
    }
  }
  return (
    <S.InputContainer size={size}>
      <S.Title>{title}</S.Title>
      <S.Input onChange={onChange} value={value} />
    </S.InputContainer>
  );
};

export default Input;
