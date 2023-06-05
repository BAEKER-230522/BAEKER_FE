import { S } from "./modify.styled";
import ModifyImg from "@/components/modify/Img";
import ModifyInput from "@/components/modify/Input";
import ModifyButton from "@/components/modify/button";
const Modify = () => {
  return (
    <S.Container>
      <ModifyImg />
      <ModifyInput title={"이름"} />
      <ModifyInput title={"자기소개"} />
      <ModifyButton />
    </S.Container>
  );
};

export default Modify;
