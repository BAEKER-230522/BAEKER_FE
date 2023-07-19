import { S } from "../style";
import StudyInfo from "@/components/Study/StudyInfo";
import Tab from "@/components/Tab/Tab";
import Board from "@/components/common/Board/Board";
import SolvedRecord from "@/components/Tab/SolvedRecord";
import LineChart from "@/components/Chart/Chart";
import { useSelector } from "react-redux";
import SolveStatus from "@/components/common/SolveStatus";
import { studyApi } from "@/api/studyApi";
import { useRouter } from "next/router";

const mock_data = [
  {
    id : 1,
    name : "실버 5문제",
    about : "실버 5문제 풀이",
    start : '23/7/15',
    end : '23/7/16',
    status : '진행',
  },
  {
    id : 6,
    name : "골드 5문제",
    about : "골드 5문제 풀이",
    start : '23/7/13',
    end : '23/7/15',
    status : '종료',
  }
]
const StudyDetail = () => {
  const router = useRouter();
  console.log(router.query);
  
  const {studyId: param} = router.query;
  const {data:studyMissionList, isLoading:getStudyMissionListLoading} = studyApi.useGetStudyRuleListQuery(Number(param));
  console.log(studyMissionList);
  
  const {data:stduyMemberList, isLoading:getMemberListLoading} = studyApi.useGetStudyMemberListQuery(Number(param));
  const {data:studyPedingList, isLoading:getPedingListLoading} = studyApi.useGetPendingListQuery(Number(param));
  const {data:studyInfo, isLoading:getStudyInfoLoading} = studyApi.useGetStudyInfoQuery(Number(param));
  
  
  const tabState = useSelector((state: any) => {
    return state.tab.studyTabState;
  });
  const TAB_ELEMENTS = ["현황", "미션", "멤버", "가입요청"];

  if(getMemberListLoading || getPedingListLoading ||getStudyMissionListLoading || getStudyInfoLoading) return <div>Loading ... </div>
  
  return ( 
    <S.StudyContainer>
      <StudyInfo />
      <Tab elements={TAB_ELEMENTS} type="study" />
      <S.ContentContainer>
        {tabState === 0 && (
          <>
            <S.StatusContainer  >
              <SolveStatus />
              <S.ChartContainer>
                <SolvedRecord id={param} data={studyInfo}/> 
                <LineChart />
              </S.ChartContainer>
            </S.StatusContainer>
          </>
        )} 
        {tabState === 1 && <Board type={"mission"} category={[["규칙", "name"], ["소개", "about"], ["시작일", "start"], ["종료일", "end"], ["상태", "status"]]} widthRatio={[1, 2, 1, 1, 1]}  data={mock_data}/>}
        {tabState === 2 && <Board type={"member"} category={[["이름", "nickname"], ["랭킹", "ruby"], ["가입한 스터디", "id"]]} widthRatio={[2, 1, 1]} data={stduyMemberList.data}/>}
        {tabState === 3 && <Board type={"join"} category={[["이름", "nickname"], ["랭킹", "ruby"], ["상태", "invite"]]} widthRatio={[1, 1, 1]} data={studyPedingList.data.pending} />}
      </S.ContentContainer>
    </S.StudyContainer>
  );
};

export default StudyDetail;

