import { IMG_URL } from "@/pages/mock";
import { S } from "./style";
import Link from "next/link";
import { memberApi } from "@/api/memberApi";
import { IUserData } from "@/pages/member/[detail]";
import { useRouter } from "next/router";
import JoinRequestModal from "../common/Modal/JoinRequestModal";

const UserInfo = ({userData}:any) => {
  const router = useRouter()
  const isMypage = Object.keys(router.query).length === 0 ? true : false;

  return (
    <S.Container>
      <S.Image src={IMG_URL} />
      <S.Name>{userData.nickname}</S.Name>
      <S.Introduce>{userData.about}</S.Introduce>
      {isMypage? <S.Button onClick={() => router.push({pathname:"/modify"})}>프로필 수정</S.Button> : <JoinRequestModal name={userData.nickname} title={"초대하기"} text={"누구누구 초대하기"} id={userData.id}/>}
    </S.Container>
  );
};

export default UserInfo;
