import React from "react";
import { S } from "./style";
import { IUserInfo } from "@/pages/modify";

interface IInput {
  title: string;
  size: string;
  value : string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ title, size, value, onChange }: IInput) => {
  
  return (
    <S.InputContainer size={size}>
      <S.Title>{title}</S.Title>
      <S.Input onChange={onChange} value={value} />
    </S.InputContainer>
  );
};

export default Input;
