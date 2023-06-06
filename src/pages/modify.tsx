import { S } from "./modify.styled";
import ModifyImg from "@/components/modify/Img";
import Input from "@/components/common/Input";
import ModifyButton from "@/components/modify/button";
const Modify = () => {
  return (
    <S.Container>
      <ModifyImg />
      <Input title={"이름"} size={"25%"} />
      <Input title={"자기소개"} size={"25%"} />
      <ModifyButton />
    </S.Container>
  );
};

export default Modify;
