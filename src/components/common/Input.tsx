import React from "react";
import { S } from "./style";

interface IInput {
  title: string;
  size: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ title, size, value, onChange }: IInput) => {
  return (
    <S.InputContainer size={size}>
      <S.Title>{title}</S.Title>
      <S.Input placeholder={title} onChange={onChange} value={value} />
    </S.InputContainer>
  );
};

export default Input;
