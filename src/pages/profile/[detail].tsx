import { S } from "./style";
import LineChart from "@/components/chart/chart";
import UserInfo from "@/components/userInfo/UserInfo";
import UserSolvedInfo from "@/components/userInfo/UserSolvedInfo";
import Tab from "@/components/tab/Tab";
import SolvedRecord from "@/components/tab/SolvedRecord";
import Board from "@/components/common/board/Board";
import { useSelector } from "react-redux";

const flag = 0;
const Profile = () => {
  const tabState = useSelector((state: any) => {
    return state.tab.profileTabState;
  });
  const TAB_ELEMENTS_MY = ["백준", "프로그래머스", "스터디", "가입 대기"];
  const TAB_ELEMENTS_OTHER = ["백준", "프로그래머스", "스터디"];

  const Component = (num: number) => {
    switch (num) {
      case 0:
        return (
          <>
            <SolvedRecord />
            <LineChart />
          </>
        );
      case 1:
        return <div>programmers</div>;
      case 2:
        return <Board category={["스터디", "소개", "인원", "스터디 장", "랭킹"]} widthRatio={[1, 2, 1, 1, 1]} />;
      case 3:
        return <Board category={["스터디", "소개", "인원", "스터디 장", "상태"]} widthRatio={[1, 2, 1, 1, 1]} />;
    }
  };
  return (
    <S.Container>
      <S.InfoContainer>
        <UserInfo />
        <UserSolvedInfo />
      </S.InfoContainer>
      {flag ? <Tab elements={TAB_ELEMENTS_MY} type="profile" /> : <Tab elements={TAB_ELEMENTS_OTHER} type="profile" />}
      <S.RecordContainer>{Component(tabState)}</S.RecordContainer>
    </S.Container>
  );
};

export default Profile;
