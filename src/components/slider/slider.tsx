import React, { useState } from "react";
import { S } from "./Slider.style";

interface IProps {
  memberCount: number;
  setMemberCount: React.Dispatch<React.SetStateAction<number>>
}
const Slider = ({...props}:IProps) => {
  console.log(props);
  const test = (e: any) => {
    console.log('test');
    props.setMemberCount(e.target.value);
  };

  const arr = [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

  return (
    <S.Container>
      <S.Title>스터디 최대 인원({props.memberCount}/20)</S.Title>
      <S.Slider type="range" onChange={test} min={1} max={20} value={props.memberCount} />
      <S.Value>{arr.map((e, idx) => (e === 1 ? <span key={idx}>{idx + 1}</span> : <span key={idx}></span>))}</S.Value>
    </S.Container>
  );
};

export default Slider;
