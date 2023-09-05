import React from "react";
import { S } from "./style";

interface IProps {
  maxStudyCapacity: number;
  setMaxStudyCapacity: React.Dispatch<React.SetStateAction<number>>;
}
const Slider = ({ ...props }: IProps) => {
  const test = (e: any) => {
    props.setMaxStudyCapacity(e.target.value);
  };

  const arr = [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

  return (
    <S.Container>
      <S.Title>스터디 최대 인원 ({props.maxStudyCapacity}/20)</S.Title>
      <S.Slider
        type="range"
        onChange={test}
        min={1}
        max={20}
        value={props.maxStudyCapacity}
      />
      <S.Value>
        {arr.map((e, idx) =>
          e === 1 ? <span key={idx}>{idx + 1}</span> : <span key={idx}></span>
        )}
      </S.Value>
    </S.Container>
  );
};

export default Slider;
