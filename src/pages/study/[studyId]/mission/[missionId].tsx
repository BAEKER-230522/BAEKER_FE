import { useRouter } from "next/router";
import { S } from "../../style";
import { Button, Progress, Space } from 'antd';
import { useState } from "react";
import AlertModal from "@/components/common/Modal/AlertModal";
import { useSelector } from "react-redux";
import { calculateDuration, getTodayDateFormatted} from "../../../../util/date"

interface IProblem {
  problemName : string;
  problemNumber : number;
}

interface IMissionData {
    id: number;
    mission: string;
    status: string;
    startDate: string;
    deadline: string;
    problems: IProblem[]
}

const MissionDetail = () => {
  // 미션 상태 ( 시작 전, 진행 중, 끝 )
  const missionData:IMissionData = useSelector((state:any) => {return state.mission.missionData})
  console.log(missionData);
  //  "exception" | "active" | "success"
  const missionStatus = missionData.mission === "DONE" ? missionData.status === "FAIL" ? "exception" : "success" : "active"
  // 미션 문제 풀이 진행률
  const [missionProgress, setMissionProgress] = useState(60);
  const HEADER_ARR = ['랭킹', '아이디']
  const DURATION = calculateDuration(missionData.startDate, missionData.deadline)+1;
  const TIME_SPAN_STATUS = Array.from({length:DURATION}, () => false)  // 기간 
  const DATE_PROGRESS = calculateDuration(missionData.startDate, getTodayDateFormatted())+1
  const PROBLEM = missionData.problems // 문제
  const PROBLEM_COUNT = missionData.problems.length; // 문제 개수
  const USER_STATUS = [   
    {
      rank: 1, 
      nickname : 'chumjio1o',
      problem_status: [true, true, true, false]
    },
    {
      rank: 2,
      nickname : 'jeongdo',
      problem_status: [false, false, true, false]
    }
  ]

  for(let i=0; i<DATE_PROGRESS; i++){
    TIME_SPAN_STATUS[i] = true;
  }

  for(let i=0; i<PROBLEM_COUNT; i++){
    HEADER_ARR.push(PROBLEM[i].problemName)
  }

  const PERIOD_HEADER = Array.from({length:DURATION}, (_,i) => `${i+1}일차`)
  const router = useRouter()
  const param = router.query;
  
  const studyId = router.query.studyId

  const movePage = () => {
    router.push({pathname:`/study/${studyId}`})
  }
  
  return (
    <S.Container>
      <S.MissionStatusContainer>
        <S.MissionProgressContainer>
          <Space wrap style={{marginBottom:"30px"}}>
            <Progress type="circle" percent={missionProgress} status={missionStatus}/>
          </Space>
        </S.MissionProgressContainer>
        <S.MissionProblemListContainer numColumn={DURATION}>
          {PERIOD_HEADER.map((e) => <div>{e}</div>)}
          {TIME_SPAN_STATUS.map((e) => {
            return e ?
            <div>
              <S.Dot color={'#6495Ed'}/>
            </div> 
            :
            <div></div>
          })}
        </S.MissionProblemListContainer>
        <S.MemberSolvingStatusContainer>
          <S.MissionProblemListContainer numColumn={PROBLEM_COUNT+2}>
            {HEADER_ARR.map((e, idx) => { return idx <= 1 ? <div>{e}</div> : <S.Problem onClick={() => window.open(`https://www.acmicpc.net/problem/${PROBLEM[idx-2].problemNumber}`, '_blank')}>{e}</S.Problem>})}
            {USER_STATUS.map((e,idx) => (
              <>
                <div>{idx+1}</div>
                <div>{e.nickname}</div>
                {
                  e.problem_status.map((p_status) => {
                    return p_status ? 
                    <div>
                      <S.Dot color={'#5bc59c'}/>
                    </div> 
                      :
                    <div>
                      <S.Dot color={'#e31d2e'}/>
                    </div>
                  })
                }
              </>
            ))}
          </S.MissionProblemListContainer>
        </S.MemberSolvingStatusContainer>
        <S.ButtonContainer>
          <Button type="primary" style={{width:"100px", height:"40px"}} onClick={movePage}>목록</Button>
          <Button style={{width:"100px", height:"40px"}} type="primary">수정</Button>
          <AlertModal id={param.missionId} title={'미션 삭제'} text={'삭제하시겠습니까 ?'} type={"mission"} backId={param.studyId}>삭제</AlertModal>
          <Button style={{width:"100px", height:"40px"}} type="primary">규칙 상세보기</Button>
        </S.ButtonContainer>
      </S.MissionStatusContainer>
    </S.Container>
  )
}

export default MissionDetail;
