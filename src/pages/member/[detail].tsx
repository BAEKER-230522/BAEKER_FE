import { S } from "../profile/style";
import LineChart from "@/components/Chart/Chart";
import UserInfo from "@/components/UserInfo/UserInfo";
import UserSolvedInfo from "@/components/UserInfo/UserSolvedInfo";
import Tab from "@/components/Tab/Tab";
import SolvedRecord from "@/components/Tab/SolvedRecord";
import Board from "@/components/common/Board/Board";
import { useSelector } from "react-redux";
import { studyApi } from "@/api/studyApi";
import { useRouter } from "next/router";
import { memberApi } from "@/api/memberApi";
const flag = 0;

export interface IUserData {
  id: number;
  bronze: number;
  diamond: number;
  gold: number;
  ruby: number;
  silver: number;
  platinum: number;
}

interface IUserInfo {
  data: IUserData
}
 
const Profile = () => {
  const router = useRouter();
  const {detail: param} = router.query;
  const {data: userStudyList, isLoading: isGetUserStudyListLoading} = studyApi.useGetUserStudyListQuery({memberId:param, status:1});
  const {data:userData, isLoading:isGetUserInfoLoading} = memberApi.useGetMemberQuery(param);
  const tabState = useSelector((state: any) => {
    return state.tab.profileTabState;
  });
  const TAB_ELEMENTS_MY = ["백준","스터디", "가입 대기"];
  const TAB_ELEMENTS_OTHER = ["백준", "스터디"];
  
  if(isGetUserStudyListLoading || isGetUserInfoLoading) return <div>Loading...</div>
  
  const Component = (num: number) => {
    switch (num) {
      case 0:
        return (
          <>
            <SolvedRecord id={Number(param)} data={userData}/>
            <LineChart />
          </>
        );
      case 1:
        return <Board type={"study"} category={[["스터디", "name"], ["소개", "about"], ["인원", "capacity"],[ "스터디 장", "leader"],["랭킹", "xp"]]} widthRatio={[1, 2, 1, 1, 1]} data={userStudyList.data.studyList}/>;
      case 2:
        return <Board type={"study"} category={["스터디", "소개", "인원", "스터디 장", "상태"]} widthRatio={[1, 2, 1, 1, 1]} data={userStudyList.data.studyList}/>;
    }
  };
  return (
    <S.Container>
      <S.InfoContainer>
        <UserInfo userData={userData.data}/>
        <UserSolvedInfo userData={userData.data}/>
      </S.InfoContainer>
      {flag ? <Tab elements={TAB_ELEMENTS_MY} type="profile" /> : <Tab elements={TAB_ELEMENTS_OTHER} type="profile" />}
      <S.RecordContainer>{Component(tabState)}</S.RecordContainer>
    </S.Container>
  );
};

export default Profile;
