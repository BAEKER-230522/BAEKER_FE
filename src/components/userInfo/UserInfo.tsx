import { IMG_URL } from "@/pages/mock";
import { S } from "./styled";
import Link from "next/link";

const UserInfo = () => {
  return (
    <S.Container>
      <S.Image src={IMG_URL} />
      <S.Name>박정도</S.Name>
      <S.Introduce>테스트입니다</S.Introduce>
      <Link href={"/modify"}>
        <S.Button>프로필 수정</S.Button>
      </Link>
    </S.Container>
  );
};

export default UserInfo;
