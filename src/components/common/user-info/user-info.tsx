import { S } from "./style";
import { useRouter } from "next/router";
import JoinRequestModal from "../modal/JoinRequestModal";
import { useSelector } from "react-redux";

interface IProps {
  userData : any;
  userId : number;
  loginUser: number;
}

const UserInfo = ({userData, userId, loginUser}:IProps) => {
  const router = useRouter()
  const id = useSelector((state:any) => {return state.user.memberId})
  return (
    <S.Container>
      <S.Image src={userData.profileImg}/>
      <S.Name>{userData.nickname}</S.Name>
      <S.Introduce>{userData.about}</S.Introduce>
      {id === userId ? <S.Button onClick={() => router.push({pathname:"/modify"})}>프로필 수정</S.Button> : userId === null ? null :  <JoinRequestModal loginUser={loginUser} name={userData.nickname} id={userData.id}/>}
    </S.Container>
  );
};

export default UserInfo;
