import { S } from "./styled";
import { IMG_URL } from "@/pages/mock";
const ModifyImg = () => {
  return (
    <S.ImgContainer>
      <img src={IMG_URL} />
      <S.Button>이미지 변경</S.Button>
    </S.ImgContainer>
  );
};

export default ModifyImg;
