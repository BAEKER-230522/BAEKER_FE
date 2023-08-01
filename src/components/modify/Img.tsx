import { S } from "./style";
import Image from "next/image";

const ModifyImg = ({userImg}:{userImg:string}) => {
  return (
    <S.ImgContainer>
      <img src={userImg} alt="kakao profile img"/>
      <button>이미지 변경</button>
    </S.ImgContainer>
  );
};

export default ModifyImg;
