import { useRouter } from "next/router";
import { themedPalette } from "@/styles/theme";
import styled from "styled-components";
import { Button, Progress, Space } from 'antd';
import { useEffect, useState } from "react";
import AlertModal from "@/components/common/modal/AlertModal";
import { calculateDuration, getTodayDateFormatted} from "../../../../util/date"
import { studyApi } from "@/api/studyApi";
import Loading from "@/components/common/loading/Loading";
import React from "react";
import { PageContainer } from "@/styles/common.style";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [missionData, memberList])
  
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
            <Progress type="circle" percent={missionProgress} status={'active'}/>
          </Space>
        </S.MissionProgressContainer>
        <S.MissionProblemListContainer numColumn={calculateDuration(missionData.data.startDate, missionData.data.deadline)+1}>
          {PERIOD_HEADER.map((e:any, idx:number) => <div key={idx}>{e}</div>)}
          {TIME_SPAN_STATUS.map((e:any, idx:number) => {
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
            {HEADER_ARR.map((e, idx) => { return idx <= 1 ? <div>{e}</div> : <S.Problem onClick={() => window.open(`https://www.acmicpc.net/problem/${memberStatus![0].problemStatusQueryDtos[idx-2].problemNumber}`, '_blank')}>{e}</S.Problem>})}
            {userSolvedStatus.map((e:any,idx:number) => (
              <React.Fragment key={idx}>
              <div>{idx+1}</div>
              <div>{e.nickname}</div>
              {
                e.problem_status.map((p_status:any, i:number) => {
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
          <AlertModal id={Number(param.missionId)} title={'미션 삭제'} text={'삭제하시겠습니까 ?'} type={"mission"} backId={Number(param.studyId)}>삭제</AlertModal>
          <Button style={{width:"100px", height:"40px"}} type="primary" onClick={() => movePage('rule')}>규칙 상세보기</Button>
        </S.ButtonContainer>
      </S.MissionStatusContainer>
    </S.Container>
  )
}

export default MissionDetail;

const Container = styled(PageContainer)` 
  height: 95vh;
`;

const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom : 15px;
  align-items: start;
  justify-content: start;
  width: 40%;
  margin-bottom : 50px;
`

const ButtonContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  height: 40px;
  margin-top: 10px;
`;


const MissionInputContainer = styled.div`
  display: flex;
  width: 90%;

`

const MissionInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`

interface MissionProblemListContainerProps{
  numColumn : number;
}
const MissionProblemListContainer = styled.div<MissionProblemListContainerProps>`
  border-radius: 10px;
  display: grid;  
  grid-template-columns: ${props => `repeat(${props.numColumn}, 150px)`};
  margin-bottom : 20px;
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color : #e7e3e3;
    border-radius : 5px;
    margin: 2px;
  }
`
interface ColorProp {
  color : string;
}

const Dot = styled.span<ColorProp>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`

const MemberSolvingStatusContainer = styled.div`
  border-radius: 10px;
  margin-top : 50px;
`

const MissionStatusContainer = styled.div`
  display: flex;
  width: 75%;
  height: 95%;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${themedPalette.bg_element2};
  overflow-x: scroll;
`

const MissionProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`

const Problem = styled.div`
  cursor : pointer;
  color : #6495Ed;
`

const S = {Problem,Dot,MissionStatusContainer, MissionProgressContainer, ButtonContainer,Container, MemberSolvingStatusContainer,MissionProblemListContainer , SelectorWrapper, MissionInputContainer,MissionInputWrapper } ;
