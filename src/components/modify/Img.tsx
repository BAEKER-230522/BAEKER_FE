import { S } from "./style";
import Image from "next/image";
import React, { SetStateAction, useRef, useState } from "react";

interface IProps {
  img: string;
  setImg: React.Dispatch<React.SetStateAction<string>>;
  setImgFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

const ModifyImg = ({ img, setImg, setImgFile }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = (event: any) => {
    event.preventDefault();
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    setImgFile(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setImg(url);
    }
  };

  return (
    <S.ImgContainer>
      {img && (
        <Image width={100} height={100} src={img} alt="kakao profile img" />
      )}
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
