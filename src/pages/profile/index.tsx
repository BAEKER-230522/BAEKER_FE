import { GetServerSideProps } from 'next'
import { parseCookies } from '@/util/parseCookie';
import { S } from "./style";
import LineChart from '@/components/chart/chart';
import UserInfo from "@/components/userInfo/UserInfo";
import UserSolvedInfo from "@/components/userInfo/UserSolvedInfo";
import Tab from "@/components/tab/Tab";
import SolvedRecord from "@/components/tab/SolvedRecord";
import Board from "@/components/common/Board/Board";
import { useSelector } from "react-redux";
import useFetchUserStudyList from "@/hooks/queries/useFetchUserStudyList";
import useFetchUserData from "@/hooks/queries/useFetchUserData";
import Loading from "@/components/Loading/Loading";


interface LoginProps {
  refreshToken: string;
  memberId: number;
}

interface IParsedCookies {
  refreshToken?: string;
  memberId?: string;
};

export const getServerSideProps : GetServerSideProps = async(context) => {
  const {req, res} = context;
  const cookies:IParsedCookies = parseCookies(req.headers.cookie)
  const refreshToken = cookies.refreshToken
  const memberId = Number(cookies.memberId)
  
  return {
    props: {
      refreshToken,
      memberId,
    },
  };
}

const Profile = ({ memberId }: LoginProps) => {
  
  const TAB_ELEMENTS = ["현황", "스터디", "가입 신청", "가입 초대"];
  const {data: userStudyList, isLoading: isStudyListLoading} = useFetchUserStudyList({memberId,status:1});
  const {data: userStudyJoinRequestList, isLoading: isStudyJoinRequestListLoading} = useFetchUserStudyList({memberId,status:2});
  const {data: userStudyInviteList, isLoading: isStudyInviteListLoading} = useFetchUserStudyList({memberId,status:3});
  const {data: userData, isLoading:isUserDataLoading} = useFetchUserData(memberId);
  const tabState = useSelector((state: any) => {
    return state.tab.profileTabState;
  });

  if(isStudyListLoading || isStudyJoinRequestListLoading || isStudyInviteListLoading || isUserDataLoading) return (
    <S.Container>
      <S.InfoContainer>
        <Loading/>
      </S.InfoContainer>
      <Tab elements={TAB_ELEMENTS} type="profile" />
      <S.RecordContainer>
        <Loading/>
      </S.RecordContainer>
    </S.Container>
  )
  
  return (
    <S.Container>
      <S.InfoContainer>
        <UserInfo userData={userData.data} userId={memberId}/>
        <UserSolvedInfo userData={userData.data}/>
      </S.InfoContainer>
      <Tab elements={TAB_ELEMENTS} type="profile" />
      <S.RecordContainer>
        {tabState === 0 && (
            <>
              <SolvedRecord data={userData}/>
              <LineChart />
            </>
          )} 
        {tabState === 1 && <Board type={"study"} category={[["스터디", "name"], ["소개", "about"], ["인원", "capacity"],[ "스터디 장", "leader"],["랭킹", "xp"]]} widthRatio={[1, 2, 1, 1, 1]} data={userStudyList.data.data}/>}
        {tabState === 2 && <Board type={"study"} category={[["스터디", "name"], ["소개", "about"], ["인원", "capacity"], ["스터디 장", "leader"], ["상태", "request"]]} widthRatio={[1, 2, 1, 1, 1]} data={userStudyJoinRequestList.data.data}/>}
        {tabState === 3 && <Board type={"study"} category={[["스터디", "name"], ["소개", "about"], ["인원", "capacity"], ["스터디 장", "leader"], ["상태", "user_invite"]]} widthRatio={[1, 2, 1, 1, 1]} data={userStudyInviteList.data.data}/>}
      </S.RecordContainer>
    </S.Container>
  );
};

export default Profile;
