import { IMG_URL } from "../../../../public/mock";
import { S } from "./style";
import { useRouter } from "next/router";
import JoinRequestModal from "../modal/JoinRequestModal";
import { useSelector } from "react-redux";

interface IProps {
  userData : any;
  userId : number;
}

const UserInfo = ({userData, userId}:IProps) => {
  const router = useRouter()
  const id = useSelector((state:any) => {return state.user.memberId})
  return (
    <S.Container>
      <S.Image src={IMG_URL}/>
      <S.Name>{userData.nickname}</S.Name>
      <S.Introduce>{userData.about}</S.Introduce>
      {id === userId ? <S.Button onClick={() => router.push({pathname:"/modify"})}>프로필 수정</S.Button> : userId === null ? null :  <JoinRequestModal name={userData.nickname} id={userData.id} userId={userId}/>}
    </S.Container>
  );
};

export default UserInfo;
