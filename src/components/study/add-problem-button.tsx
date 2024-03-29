import React from "react";
import { S } from "../common/style";
import { toast } from "react-toastify";
import { IMissionProblem } from "@/pages/study/mission";

interface IInput {
  title: string;
  size: string;
  value: string;
  missionProblemState: IMissionProblem[];
  setProblemValue: React.Dispatch<React.SetStateAction<string>>;
  setMissionProblemState: React.Dispatch<React.SetStateAction<IMissionProblem[]>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddProblemInputBox = ({
  missionProblemState,
  title,
  size,
  value,
  onChange,
  setProblemValue,
  setMissionProblemState,
}: IInput) => {
  const handleAddProblem = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    let valid = true;
    for (let i = 0; i < missionProblemState.length; i++) {
      if (missionProblemState[i].problemNumber === String(value)) {
        valid = false;
        break;
      }
    }
    if (valid === false) return toast("중복되는 문제가 존재합니다.");
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
      const newProblem: IMissionProblem = {
        idx: missionProblemState.length + 1,
        problemNumber: value,
        problemName: result.data.subject,
        xp: result.data.level + 1,
        remove: "삭제",
      };
      setMissionProblemState((prevProblemState) => [...prevProblemState, newProblem]);
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
