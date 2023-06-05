import { S } from "./styled";

const ModifyInput = ({ title }: { title: string }) => {
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Input />
    </>
  );
};

export default ModifyInput;
