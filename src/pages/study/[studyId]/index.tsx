import { S } from "../style";
import StudyInfo from "@/components/Study/studyInfo";
import Tab from "@/components/Tab/Tab";
import Board from "@/components/common/Board/Board";
import SolvedRecord from "@/components/Tab/SolvedRecord";
import LineChart from "@/components/Chart/chart";
import { useSelector } from "react-redux";
import SolveStatus from "@/components/common/solveStatus";
import { studyApi } from "@/api/studyApi";
import { useRouter } from "next/router";
import Loading from "@/components/Loading/Loading";
import { parseCookies } from "@/util/parseCookie";
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";

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
  }, [getMemberListLoading])

  useEffect(() => {
    if(!getStudyInfoLoading){
      if(studyInfo.data.leader === memberId){
        setIsLeader(true)
        setTAB_ELEMENTS(["현황", "미션", "멤버", "가입요청"])
      }
    } 
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
              <SolveStatus />
              <S.ChartContainer>
                <SolvedRecord id={param} data={studyInfo}/> 
                <LineChart />
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

