import React from "react";
import { S } from "../common/style";
import { useDispatch, useSelector } from "react-redux";
import * as userAction from "@/store/modules/mission";
import { toast } from "react-toastify";
interface IInput {
  title: string;
  size: string;
  value: string;
  setProblemValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddProblemInputBox = ({ title, size, value, onChange, setProblemValue }: IInput) => {
  const dispatch = useDispatch();

  const missionProblemState = useSelector((state: any) => {
    return state.mission.missionProblemState;
  });
  const handleAddProblem = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const accessToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="))
      ?.split("=")[1];
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SOLVED_URL}api/solved/v1/${value}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${accessToken}`,
        },
      });

      const result = await response.json();

      const newProblem = {
        idx: missionProblemState.length + 1,
        problemNumber: value,
        problemName: result.data.subject,
        remove: "삭제",
      };
      dispatch(userAction.addProblem(newProblem));
      setProblemValue("");
    } catch (err) {
      toast("존재하지 않는 문제 번호입니다");
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddProblem(e);
    }
  };
  return (
    <S.InputContainer size={size}>
      <S.Title>{title}</S.Title>
      <S.InputWrapper>
        <S.Input onChange={onChange} value={value} placeholder="문제 번호를 입력해 주세요" onKeyPress={onKeyPress} />
        <S.Button type="button" onClick={handleAddProblem}>
          추가
        </S.Button>
      </S.InputWrapper>
    </S.InputContainer>
  );
};
export default AddProblemInputBox;
