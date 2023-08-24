import styled from "styled-components";
import StudyInfo from "@/components/study/study-info";
import Tab from "@/components/common/tab/tab";
import Board from "@/components/common/board/Board";
import SolvedRecord from "@/components/common/tab/solved-record";
import LineChart from "@/components/common/chart/chart";
import { useSelector } from "react-redux";
import SolveStatus from "@/components/common/solve-status";
import { studyApi } from "@/api/studyApi";
import { useRouter } from "next/router";
import Loading from "@/components/common/loading/Loading";
import { parseCookies } from "@/util/parseCookie";
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import { PageContainer } from "@/styles/common.style";

interface IServerSideProp {
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
  const refreshToken = cookies.refreshToken ? cookies.refreshToken : null
  const memberId = Number(cookies.memberId) ? Number(cookies.memberId) : null
  
  return {
    props: {
      refreshToken,
      memberId,
    },
  };
}

const StudyDetail = ({ refreshToken, memberId }: IServerSideProp) => {
  const router = useRouter();
  const {studyId: param} = router.query;
  const {data:studyMissionList, isLoading:getStudyMissionListLoading} = studyApi.useGetStudyRuleListQuery(Number(param));
  const {data:stduyMemberList, isLoading:getMemberListLoading} = studyApi.useGetStudyMemberListQuery(Number(param));
  const {data:studyPedingList, isLoading:getPedingListLoading} = studyApi.useGetPendingListQuery(Number(param));
  const {data:studyInfo, isLoading:getStudyInfoLoading} = studyApi.useGetStudyInfoQuery(Number(param));
  const [isUserStudy, setIsUserStudy] = useState<boolean>(false);
  const [isLeader, setIsLeader] = useState<boolean>(false);
  const [TAB_ELEMENTS, setTAB_ELEMENTS] = useState<string[]>(["현황", "미션", "멤버"])
  const tabState = useSelector((state: any) => {
    return state.tab.studyTabState;
  });

  useEffect(() => {
    if(memberId === null) setIsUserStudy(true)
    if(!getMemberListLoading){
      for(let i=0; i<stduyMemberList.data.length; i++){
        if(memberId === stduyMemberList.data[i].id){
          setIsUserStudy(true)
          break
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMemberListLoading])

  useEffect(() => {
    if(!getStudyInfoLoading){
      if(studyInfo.data.leader === memberId){
        setIsLeader(true)
        setTAB_ELEMENTS(["현황", "미션", "멤버", "가입요청"])
      }
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getStudyInfoLoading])

  if(getMemberListLoading || getPedingListLoading || getStudyMissionListLoading || getStudyInfoLoading ) return (
    <S.StudyContainer>
      <StudyInfo isUserStudy={isUserStudy} isLeader={isLeader} memberId={memberId}/>
      <Tab elements={TAB_ELEMENTS} type="study" />
      <S.ContentContainer>
        <Loading/>
      </S.ContentContainer>
    </S.StudyContainer>
  )

  return ( 
    <S.StudyContainer>
      <StudyInfo isUserStudy={isUserStudy} isLeader={isLeader} memberId={memberId}/>
      <Tab elements={TAB_ELEMENTS} type="study" />
      <S.ContentContainer>
        {tabState === 0 && (
          <>
            <S.StatusContainer >
              <SolveStatus studyInfo={studyInfo}/>
              <S.ChartContainer>
                <SolvedRecord id={param} data={studyInfo}/> 
                <LineChart id={Number(param)} type={"study"}/>
              </S.ChartContainer>
            </S.StatusContainer>
          </>
        )} 
        {tabState === 1 && <Board type={"mission"} category={[["규칙", "name"], ["소개", "about"], ["시작일", "startDate"], ["종료일", "deadline"], ["상태", "mission"]]} widthRatio={[1, 2, 1, 1, 1]}  data={studyMissionList.data}/>}
        {tabState === 2 && <Board type={"member"} category={[["이름", "nickname"], ["랭킹", "ruby"], ["가입한 스터디", "id"]]} widthRatio={[2, 1, 1]} data={stduyMemberList.data}/>}
        {tabState === 3 && <Board type={"join"} category={[["이름", "nickname"], ["랭킹", "ruby"], ["상태", "study_invite"]]} widthRatio={[1, 1, 1]} data={studyPedingList.data.pending} />}
      </S.ContentContainer>
    </S.StudyContainer>
  );
};

export default StudyDetail;

const Container = styled(PageContainer)`
`;

const StudyContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.backgroundColor};
`

const RecordContainer = styled.div`
  width: 80%;
  padding: 20px;
  height: 65vh;
  display: flex;
  background-color : #f8f9fa;
  border-radius: 10px;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 100px;
`;

const ContentContainer = styled(RecordContainer)`
  width: 70%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChartContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


const Button = styled.input`
  width: 40%;
  height: 50px;
  border-radius: 10px;
  background-color: #661ae6;
  color: white;
  font-weight: 500;
  cursor: pointer;
  border: none;
  margin-top : 50px;
`;


const S = {Container,ContentContainer, ChartContainer, StatusContainer,Button, StudyContainer} ;
