import { useRouter } from "next/router";
import { S } from "../../style";
import { Button, Progress, Space } from 'antd';
import { useEffect, useState } from "react";
import AlertModal from "@/components/common/Modal/AlertModal";
import { calculateDuration, getTodayDateFormatted} from "../../../../util/date"
import { studyApi } from "@/api/studyApi";
import Loading from "@/components/Loading/Loading";
import React, { Fragment } from "react";

interface IProblemStatusQueryDtos{
  memberId: number;
  problemName: string;
  problemNumber: number;
  problemStatus: string;
}

interface IPersonStudyRuleDtst{
  memberId : number;
  personalStudyRuleStatus: string;
  problemStatusQueryDtos: IProblemStatusQueryDtos[];
}
const MissionDetail = () => {
  const router = useRouter()
  const param = router.query;
  const studyId = router.query.studyId
  const missionId = router.query.missionId
  const {data: missionData, isLoading: getMissionDataLoading} = studyApi.useGetStudyRuleQuery(missionId)
  const {data: memberList, isLoading: getMemberListLoading} = studyApi.useGetStudyMemberListQuery(studyId)
  
  const [memberStatus, setMemberStatus] = useState<IPersonStudyRuleDtst[]>()
  const [missionStatus, setMissionState] = useState<string>()
  const [missionProgress, setMissionProgress] = useState(0);
  const [userSolvedStatus, setUserSolvedStatus] = useState<any>();
  const [HEADER_ARR, setHEADER_ARR] = useState(['랭킹', '아이디'])
  const [TIME_SPAN_STATUS, setTIME_SPAN_STATUS] = useState<any>();
  const [PERIOD_HEADER, setPERIOD_HEADER] = useState<any>();
  useEffect(() => {
    if(missionData !== undefined && memberList !== undefined){
      setMemberStatus(missionData.data.personalStudyRuleDtos)
      setMissionState(missionData.data.mission)
      setTIME_SPAN_STATUS(Array.from({length:calculateDuration(missionData.data.startDate, missionData.data.deadline)+1}, () => false))
      const USER_STATUS = [];
      for(let i=0; i<memberList.data.length; i++){
        for(let k=0; k<missionData.data.personalStudyRuleDtos.length; k++){
          if(missionData.data.personalStudyRuleDtos[k].memberId === memberList.data[i].id){
            const PROBLEM_STATUS = [];
            for(let j=0; j<missionData.data.personalStudyRuleDtos[k].problemStatusQueryDtos.length; j++){
              if(missionData.data.personalStudyRuleDtos[k].problemStatusQueryDtos[j] === "COMPLETE"){
                PROBLEM_STATUS.push(true)
              }else{
                PROBLEM_STATUS.push(false)
              }
            }
            USER_STATUS.push({
              nickname : memberList.data[i].nickname,
              problem_status : PROBLEM_STATUS
            })
          }
        }
      }
      setUserSolvedStatus(USER_STATUS)

      let newStatus = [...Array.from({length:calculateDuration(missionData.data.startDate, missionData.data.deadline)+1}, () => false)]; // 기존 배열 복사
      for(let i=0; i<calculateDuration(missionData.data.startDate, getTodayDateFormatted())+1; i++){
        if(i >= calculateDuration(missionData.data.startDate, missionData.data.deadline)+1) break
        newStatus[i] = true;
      }
      setTIME_SPAN_STATUS(newStatus)

      const NEW_HEADER = [...HEADER_ARR];
      for(let i=0; i<missionData.data.personalStudyRuleDtos[0].problemStatusQueryDtos.length; i++){
        NEW_HEADER.push(missionData.data.personalStudyRuleDtos[0].problemStatusQueryDtos[i].problemName)
      }
      setHEADER_ARR(NEW_HEADER)
      setPERIOD_HEADER(Array.from({length:calculateDuration(missionData.data.startDate, missionData.data.deadline)+1}, (_,i) => `${i+1}일차`))
    }
  }, [missionData, memberList])
  console.log(memberStatus, missionStatus, userSolvedStatus, HEADER_ARR, PERIOD_HEADER);
  
  const movePage = (type:'study'|'rule') => {
    switch(type){
      case 'study':
        router.push({pathname:`/study/${studyId}`})
        return
      case 'rule':
        router.push({pathname:`/rule/list`})
        return
    }
  }

  if(getMissionDataLoading || getMemberListLoading || userSolvedStatus === undefined) return <Loading/>
  
  return (
    <S.Container>
      <S.MissionStatusContainer>
        <S.MissionProgressContainer>
          <div>
            시작 : {missionData.data.startDate}
          </div>
          <div>
            끝 : {missionData.data.deadline}
          </div>
          <Space wrap style={{marginBottom:"30px"}}>
            <Progress type="circle" percent={missionProgress} status={missionStatus}/>
          </Space>
        </S.MissionProgressContainer>
        <S.MissionProblemListContainer numColumn={calculateDuration(missionData.data.startDate, missionData.data.deadline)+1}>
          {PERIOD_HEADER.map((e, idx) => <div key={idx}>{e}</div>)}
          {TIME_SPAN_STATUS.map((e, idx) => {
            return e ?
            <div key={idx}>
              <S.Dot color={'#6495Ed'}/>
            </div> 
            :
            <div key={idx}></div>
          })}
        </S.MissionProblemListContainer>
        <S.MemberSolvingStatusContainer>
          <S.MissionProblemListContainer numColumn={missionData.data.personalStudyRuleDtos[0].problemStatusQueryDtos.length+2}>
            {HEADER_ARR.map((e, idx) => { return idx <= 1 ? <div>{e}</div> : <S.Problem onClick={() => window.open(`https://www.acmicpc.net/problem/${memberStatus[0].problemStatusQueryDtos[idx-2].problemNumber}`, '_blank')}>{e}</S.Problem>})}
            {userSolvedStatus.map((e,idx) => (
              <React.Fragment key={idx}>
              <div>{idx+1}</div>
              <div>{e.nickname}</div>
              {
                e.problem_status.map((p_status, i) => {
                  return p_status ? 
                  <div key={i}>
                    <S.Dot color={'#5bc59c'}/>
                  </div> 
                    :
                  <div key={i}>
                    <S.Dot color={'#e31d2e'}/>
                  </div>
                })
              }
            </React.Fragment>
            ))}
          </S.MissionProblemListContainer>
        </S.MemberSolvingStatusContainer>
        <S.ButtonContainer>
          <Button type="primary" style={{width:"100px", height:"40px"}} onClick={() => movePage('study')}>목록</Button>
          <Button style={{width:"100px", height:"40px"}} type="primary">수정</Button>
          <AlertModal id={param.missionId} title={'미션 삭제'} text={'삭제하시겠습니까 ?'} type={"mission"} backId={param.studyId}>삭제</AlertModal>
          <Button style={{width:"100px", height:"40px"}} type="primary" onClick={() => movePage('rule')}>규칙 상세보기</Button>
        </S.ButtonContainer>
      </S.MissionStatusContainer>
    </S.Container>
  )
}

export default MissionDetail;
