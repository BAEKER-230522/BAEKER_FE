import { S } from "./style";
import LineChart from "@/components/Chart/Chart";
import UserInfo from "@/components/UserInfo/UserInfo";
import UserSolvedInfo from "@/components/UserInfo/UserSolvedInfo";
import Tab from "@/components/Tab/Tab";
import SolvedRecord from "@/components/Tab/SolvedRecord";
import Board from "@/components/common/Board/Board";
import { useSelector } from "react-redux";
import { studyApi } from "@/api/studyApi";
import { memberApi } from "@/api/memberApi";
import { useRouter } from "next/router";
const flag = 0;

const Profile = () => {
  const router = useRouter()
  
  
  const {data: userStudyList, isLoading: isGetUserStudyListLoading} = studyApi.useGetUserStudyListQuery({memberId:5,status:1});
  const {data: userStudyRequestList, isLoading: isGetUserRequestStudyListLoading} = studyApi.useGetUserStudyListQuery({memberId:5,status:2});
  const {data: userStudyInviteList, isLoading: isGetUserInviteStudyListLoading} = studyApi.useGetUserStudyListQuery({memberId:5,status:3});
  const {data:userData, isLoading:isGetUserInfoLoading} = memberApi.useGetMemberQuery(5);
  const tabState = useSelector((state: any) => {
    return state.tab.profileTabState;
  });
  const TAB_ELEMENTS_MY = ["백준", "스터디", "가입 신청", "가입 초대"];
  const TAB_ELEMENTS_OTHER = ["백준", "스터디"];

  if(isGetUserStudyListLoading || isGetUserRequestStudyListLoading || isGetUserInviteStudyListLoading || isGetUserInfoLoading) return <div>Loading...</div>
  const Component = (num: number) => {
    switch (num) {
      case 0:
        return (
          <>
            <SolvedRecord id={1} data={userData}/>
            <LineChart />
          </>
        );
      case 1:
        return <Board type={"study"} category={[["스터디", "name"], ["소개", "about"], ["인원", "capacity"],[ "스터디 장", "leader"],["랭킹", "xp"]]} widthRatio={[1, 2, 1, 1, 1]} data={userStudyList.data.studyList}/>;
      case 2:
        return <Board type={"study"} category={[["스터디", "name"], ["소개", "about"], ["인원", "capacity"], ["스터디 장", "leader"], ["상태", "request"]]} widthRatio={[1, 2, 1, 1, 1]} data={userStudyRequestList.data.studyList}/>;
      case 3:
        return <Board type={"study"} category={[["스터디", "name"], ["소개", "about"], ["인원", "capacity"], ["스터디 장", "leader"], ["상태", "invite"]]} widthRatio={[1, 2, 1, 1, 1]} data={userStudyInviteList.data.studyList}/>;
    }
  };
  return (
    <S.Container>
      <S.InfoContainer>
        <UserInfo userData={userData.data}/>
        <UserSolvedInfo userData={userData.data}/>
      </S.InfoContainer>
      {flag ? <Tab elements={TAB_ELEMENTS_OTHER} type="profile" /> : <Tab elements={TAB_ELEMENTS_MY} type="profile" />}
      <S.RecordContainer>{Component(tabState)}</S.RecordContainer>
    </S.Container>
  );
};

export default Profile;
