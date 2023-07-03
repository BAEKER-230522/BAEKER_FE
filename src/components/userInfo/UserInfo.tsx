import { IMG_URL } from "@/pages/mock";
import { S } from "./styled";
import Link from "next/link";
import { memberApi } from "@/api/memberApi";
import { IUserData } from "@/pages/member/[detail]";
import { useRouter } from "next/router";

const UserInfo = ({userData}:any) => {
  const router = useRouter()
  const isMypage = Object.keys(router.query).length === 0 ? true : false;
  console.log(isMypage);
  
  return (
    <S.Container>
      <S.Image src={IMG_URL} />
      <S.Name>{userData.nickname}</S.Name>
      <S.Introduce>{userData.about}</S.Introduce>
      <Link href={"/modify"}>
        {isMypage? <S.Button>프로필 수정</S.Button> : <S.Button>스터디 초대하기</S.Button>}
      </Link>
    </S.Container>
  );
};

export default UserInfo;
