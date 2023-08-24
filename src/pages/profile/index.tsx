import styled from "styled-components";
import { GetServerSideProps } from 'next'
import { parseCookies } from '@/util/parseCookie';
import LineChart from '@/components/common/chart/chart';
import UserInfo from "@/components/common/user-info/user-info";
import UserSolvedInfo from "@/components/common/user-info/user-solved-info";
import Tab from "@/components/common/tab/tab";
import SolvedRecord from "@/components/common/tab/solved-record";
import Board from "@/components/common/board/Board";
import { useSelector } from "react-redux";
import useFetchUserStudyList from "@/hooks/queries/useFetchUserStudyList";
import useFetchUserData from "@/hooks/queries/useFetchUserData";
import Loading from "@/components/common/loading/Loading";


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
              <LineChart id={memberId} type={"member"}/>
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

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgronudColors.white};
`;

const InfoContainer = styled.div`
  margin: 60px 0px 40px 0px;
  width: 50%;
  display: flex;
  justify-content: center;
`;

export const RecordContainer = styled.div`
  width: 80%;
  padding: 20px;
  height: 65vh;
  display: flex;
  background-color : ${(props) => props.theme.backgronudColors.gray};
  border-radius: 10px;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 100px;
`;

const S = {
  Container,
  InfoContainer,
  RecordContainer,
};
