import React from "react";
import { S } from "../common/style";
import { useDispatch, useSelector } from "react-redux";
import * as userAction from "@/store/modules/missionProblem";
interface IInput {
  title: string;
  size: string;
  value : string;
  setProblemValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const AddProblemInputBox = ({ title, size, value, onChange, setProblemValue }: IInput) => {
  const dispatch = useDispatch();
  const missionProblemState = useSelector((state:any) => {
    return state.missionProblem.missionProblemState
  })
  
  const handleAddProblem = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newProblem = {
      idx: missionProblemState.length + 1,
      num: value,
      link: `https://www.acmicpc.net/problem/${value}`,
      remove: "삭제",
    };
    dispatch(userAction.addProblem(newProblem));
    setProblemValue('')
  }

  return (
    <S.InputContainer size={size}>
      <S.Title>{title}</S.Title>
      <S.InputWrapper>
        <S.Input onChange={onChange} value={value} placeholder="문제 번호를 입력해 주세요"/>
        <S.Button type="button" onClick={handleAddProblem}>추가</S.Button>
      </S.InputWrapper>
    </S.InputContainer>
  );
};

export default AddProblemInputBox;
