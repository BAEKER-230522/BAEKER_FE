import { GetServerSideProps } from 'next'
import { parseCookies } from '@/util/parseCookie';
import { S } from "./style";
import LineChart from "@/components/Chart/Chart";
import UserInfo from "@/components/UserInfo/UserInfo";
import UserSolvedInfo from "@/components/UserInfo/UserSolvedInfo";
import Tab from "@/components/Tab/Tab";
import SolvedRecord from "@/components/Tab/SolvedRecord";
import Board from "@/components/common/Board/Board";
import { useDispatch, useSelector } from "react-redux";
import { USER_NUMBER } from "@/util/constant";
import useFetchUserStudyList from "@/hooks/queries/useFetchUserStudyList";
import useFetchUserData from "@/hooks/queries/useFetchUserData";
import useTabSwitch from "@/hooks/useTabSwitch";
import Loading from "@/components/Loading/Loading";
import { loginUser } from '@/store/modules/user';
import { useEffect, useState } from 'react';

interface LoginProps {
  refreshToken: string;
  memberId: number;
}

export const getServerSideProps : GetServerSideProps = async(context) => {
  const {req, res} = context;
  const cookies = parseCookies(req.headers.cookie)
  const refreshToken = cookies.refreshToken
  const memberId = Number(cookies.memberId)
  
  return {
    props: {
      refreshToken,
      memberId,
    },
  };
}

const Profile = ({ refreshToken, memberId }: LoginProps) => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    localStorage.setItem('refreshToken', refreshToken)
    localStorage.setItem('memberId', String(memberId))
  }, [])
  
  const TAB_ELEMENTS = ["백준", "스터디", "가입 신청", "가입 초대"];
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
  
  const TabComponent = useTabSwitch([
    () => (
      <>
        <SolvedRecord id={1} data={userData}/>
        <LineChart />
      </>
    ),
    () => <Board type={"study"} category={[["스터디", "name"], ["소개", "about"], ["인원", "capacity"],[ "스터디 장", "leader"],["랭킹", "xp"]]} widthRatio={[1, 2, 1, 1, 1]} data={userStudyList.data.data}/>,
    () => <Board type={"study"} category={[["스터디", "name"], ["소개", "about"], ["인원", "capacity"], ["스터디 장", "leader"], ["상태", "request"]]} widthRatio={[1, 2, 1, 1, 1]} data={userStudyJoinRequestList.data.data}/>,
    () => <Board type={"study"} category={[["스터디", "name"], ["소개", "about"], ["인원", "capacity"], ["스터디 장", "leader"], ["상태", "user_invite"]]} widthRatio={[1, 2, 1, 1, 1]} data={userStudyInviteList.data.data}/>,
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
