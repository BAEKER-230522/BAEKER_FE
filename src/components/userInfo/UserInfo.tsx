import { IMG_URL } from "@/pages/mock";
import { S } from "./style";
import { useRouter } from "next/router";
import JoinRequestModal from "../common/Modal/JoinRequestModal";

interface IProps {
  userData : any;
  userId : string;
}

const UserInfo = ({userData, userId}:IProps) => {
  const router = useRouter()
  const isMypage = Object.keys(router.query).length === 0 ? true : false;

  return (
    <S.Container>
      <S.Image src={IMG_URL} />
      <S.Name>{userData.nickname}</S.Name>
      <S.Introduce>{userData.about}</S.Introduce>
      {isMypage? <S.Button onClick={() => router.push({pathname:"/modify"})}>프로필 수정</S.Button> : userId === null ? null :  <JoinRequestModal name={userData.nickname} id={userData.id} userId={userId}/>}
    </S.Container>
  );
};

export default UserInfo;
