import { S } from "./createStudy.style";
import Input from "@/components/common/Input";
import Slider from "@/components/slider/slider";
const CreateStudy = () => {
  return (
    <S.Container>
      <Input title={"스터디 이름"} size={"40%"} />
      <Input title={"스터디 소개"} size={"40%"} />
      <Slider />
      <S.Button>개설하기</S.Button>
    </S.Container>
  );
};

export default CreateStudy;
