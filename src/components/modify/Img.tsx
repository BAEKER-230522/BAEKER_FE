import { S } from "./style";

const ModifyImg = ({userImg}:{userImg:string}) => {
  return (
    <S.ImgContainer>
      <img src={userImg} alt="kakao profile img"/>
      <button>이미지 변경</button>
    </S.ImgContainer>
  );
};

export default ModifyImg;
