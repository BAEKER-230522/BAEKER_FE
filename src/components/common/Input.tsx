import { S } from "./styled";

interface IInput {
  title: string;
  size: string;
}

const Input = ({ title, size }: IInput) => {
  return (
    <S.InputContainer size={size}>
      <S.Title>{title}</S.Title>
      <S.Input />
    </S.InputContainer>
  );
};

export default Input;
