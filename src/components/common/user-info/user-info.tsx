import { S } from "./style";
import { useRouter } from "next/router";
import JoinRequestModal from "../modal/JoinRequestModal";
import Image from "next/image";
import LocalStorage from "@/util/localstorage";

interface IProps {
  userData: any;
  userId: number;
  loginUser?: number;
}

const UserInfo = ({ userData, userId, loginUser }: IProps) => {
  const router = useRouter();
  const id = Number(LocalStorage.getItem("memberId"));
  return (
    <S.Container>
      <Image
        width={110}
        height={110}
        src={userData.profileImg}
        alt="kakao profile img"
        style={{ borderRadius: "50%" }}
      />
      <S.Name>{userData.nickname}</S.Name>
      <S.Introduce>{userData.about}</S.Introduce>
      {id! === userId ? (
        <S.Button onClick={() => router.push({ pathname: "/modify" })}>프로필 수정</S.Button>
      ) : (
        loginUser && <JoinRequestModal loginUser={loginUser!} name={userData.nickname} id={userData.id} />
      )}
    </S.Container>
  );
};

export default UserInfo;
