import React, { useRef, useState } from "react";
import { S } from "./style";
import Image from "next/image";

interface IProps{
  img : string;
  setImg : any;
}

const ModifyImg = ({ img, setImg }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = (event: any) => {
    event.preventDefault();
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setImg(url);
    }
  };

  return (
    <S.ImgContainer>
      {img && <Image width={100} height={100} src={img} alt="kakao profile img" />}
      <button onClick={handleButtonClick}>이미지 변경</button>
      <input
        type="file"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={handleFileChange}
      />
    </S.ImgContainer>
  );
};

export default ModifyImg;
