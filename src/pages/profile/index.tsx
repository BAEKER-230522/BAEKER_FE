import { S } from "./style";
import LineChart from "@/components/Chart/Chart";
import UserInfo from "@/components/UserInfo/UserInfo";
import UserSolvedInfo from "@/components/UserInfo/UserSolvedInfo";
import Tab from "@/components/Tab/Tab";
import SolvedRecord from "@/components/Tab/SolvedRecord";
import Board from "@/components/common/Board/Board";
import { useSelector } from "react-redux";
import { USER_NUMBER } from "@/util/constant";
import useFetchUserStudyList from "@/hooks/queries/useFetchUserStudyList";
import useFetchUserData from "@/hooks/queries/useFetchUserData";
import useTabSwitch from "@/hooks/useTabSwitch";

const Profile = () => {
  const TAB_ELEMENTS = ["백준", "스터디", "가입 신청", "가입 초대"];
  const {data: userStudyList, isLoading: isStudyListLoading} = useFetchUserStudyList({memberId:USER_NUMBER,status:1});
  const {data: userStudyJoinRequestList, isLoading: isStudyJoinRequestListLoading} = useFetchUserStudyList({memberId:USER_NUMBER,status:2});
  const {data: userStudyInviteList, isLoading: isStudyInviteListLoading} = useFetchUserStudyList({memberId:USER_NUMBER,status:3});
  const {data: userData, isLoading:isUserDataLoading} = useFetchUserData(USER_NUMBER);
  
  const tabState = useSelector((state: any) => {
    return state.tab.profileTabState;
  });

  if(isStudyListLoading || isStudyJoinRequestListLoading || isStudyInviteListLoading || isUserDataLoading) return <div>Loading...</div>
  
  const TabComponent = useTabSwitch([
    () => (
      <>
        <SolvedRecord id={1} data={userData}/>
        <LineChart />
      </>
    ),
    () => <Board type={"study"} category={[["스터디", "name"], ["소개", "about"], ["인원", "capacity"],[ "스터디 장", "leader"],["랭킹", "xp"]]} widthRatio={[1, 2, 1, 1, 1]} data={userStudyList.data.studyList}/>,
    () => <Board type={"study"} category={[["스터디", "name"], ["소개", "about"], ["인원", "capacity"], ["스터디 장", "leader"], ["상태", "request"]]} widthRatio={[1, 2, 1, 1, 1]} data={userStudyJoinRequestList.data.studyList}/>,
    () => <Board type={"study"} category={[["스터디", "name"], ["소개", "about"], ["인원", "capacity"], ["스터디 장", "leader"], ["상태", "invite"]]} widthRatio={[1, 2, 1, 1, 1]} data={userStudyInviteList.data.studyList}/>,
  ])

  return (
    <S.Container>
      <S.InfoContainer>
        <UserInfo userData={userData.data}/>
        <UserSolvedInfo userData={userData.data}/>
      </S.InfoContainer>
      <Tab elements={TAB_ELEMENTS} type="profile" />
      <S.RecordContainer>
        <TabComponent num={tabState}/>
      </S.RecordContainer>
    </S.Container>
  );
};

export default Profile;
