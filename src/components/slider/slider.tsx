import { useState } from "react";
import { S } from "./style";

const Slider = () => {
  const [number, setNumber] = useState(1);
  const test = (e: any) => {
    setNumber(e.target.value);
  };

  const arr = [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

  return (
    <S.Container>
      <S.Title>스터디 최대 인원({number}/20)</S.Title>
      <S.Slider type="range" onChange={test} min={1} max={20} value={number} />
      <S.Value>{arr.map((e, idx) => (e === 1 ? <span key={idx}>{idx + 1}</span> : <span key={idx}></span>))}</S.Value>
    </S.Container>
  );
};

export default Slider;
