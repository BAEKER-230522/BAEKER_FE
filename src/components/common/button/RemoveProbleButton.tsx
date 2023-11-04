import React, { useState } from "react";
import { S } from "../table/ui/style";
import { Button } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { IMissionProblem } from "@/pages/study/mission";

interface IProps {
  idx: number;
  data: IMissionProblem[];
  setMissionProblemState: React.Dispatch<React.SetStateAction<IMissionProblem[]>>;
}

const RemoveProblemButton = ({ idx, data, setMissionProblemState }: IProps) => {
  const [size, setSize] = useState<SizeType>("middle"); // default is 'middle'

  const handleRemoveMissionProblem = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    const temp = data.filter((problem) => problem.idx !== idx);
    setMissionProblemState(temp);
  };

  return (
    <S.ButtonWrapper>
      <Button type="primary" size={size} onClick={(e) => handleRemoveMissionProblem(e)}>
        삭제
      </Button>
    </S.ButtonWrapper>
  );
};

export default RemoveProblemButton;
