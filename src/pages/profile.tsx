import { S } from "./profile.styled";
import LineChart from "@/components/chart/chart";
import UserInfo from "@/components/userInfo/UserInfo";
import UserSolvedInfo from "@/components/userInfo/UserSolvedInfo";

const Profile = () => {
  return (
    <S.Container>
      <S.InfoContainer>
        <UserInfo />
        <UserSolvedInfo />
      </S.InfoContainer>
      <LineChart />
    </S.Container>
  );
};

export default Profile;
