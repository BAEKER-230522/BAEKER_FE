import { S } from "./style";
import { IMG_URL } from "@/pages/mock";
const ModifyImg = () => {
  return (
    <S.ImgContainer>
      <img src={IMG_URL} />
      <button>이미지 변경</button>
    </S.ImgContainer>
  );
};

export default ModifyImg;
