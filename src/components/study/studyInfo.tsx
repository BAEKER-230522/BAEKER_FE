import { IMG_URL } from "@/pages/mock";
import { S } from "./style";

const StudyInfo = () => {
  return (
    <S.Container>
      <S.Img src={IMG_URL} />
      <S.StudyInfoContainer>
        <div>스터디 이름</div>
        <button>가입하기</button>
      </S.StudyInfoContainer>
    </S.Container>
  );
};

export default StudyInfo;
