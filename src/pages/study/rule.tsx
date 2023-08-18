import { S } from "./style";
import Input from "@/components/common/Input";
import useInput from "@/hooks/useInput";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ruleApi } from "@/api/ruleApi";
import Selector from "@/components/common/Selector";
import useMissionEdit from "@/hooks/useMissionEdit";
import StartToEndRangeDatePicker from "@/components/Calendar/RangeDatePicker";
import Board from "@/components/common/Board/Board";
import AddProblemInputBox from "@/components/Study/AddProblemInputBox";
import { useDispatch, useSelector } from "react-redux";
import Loading from "@/components/Loading/Loading";

const Mission = () => {
  const router = useRouter();
  const {param} = router.query
  const isEditMode = Object.keys(router.query).length > 1 ? true : false;
  const {handleCreateMission, handleUpdateStudy, setRuleId} = useMissionEdit()
  const [nameValue, setNameValue, nameHandler] = useInput('')
  const [aboutValue, setAboutValue, aboutHandler] = useInput('')
  const [problemValue, setProblemValue, problemHandler] = useInput('')
  const [missionStartDate, setMissionStartDate] = useState('')
  const [missionEndDate, setMissionEndDate] = useState('')
  const [problemList, setProblemList] = useState([])
  const {data, isLoading} = ruleApi.useGetAllRulesQuery({});
  

  
  const missionProblemState = useSelector((state:any) => {
    return state.mission.missionProblemState
  })

  useEffect(() => {
    setNameValue(String(router.query.name))
    setAboutValue(String(router.query.about))
  }, [])

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if(isEditMode){
      handleUpdateStudy({nameValue, aboutValue, router})
    }else{
      handleCreateMission({nameValue, aboutValue, param, startDate:missionStartDate, deadline:missionEndDate, problemList})
    }
  }
  

  if(isLoading) return (
    <S.Container>
      <S.FormContainer onSubmit={(e) => handleSubmit(e)}>
        <S.MissionInputContainer>
          <S.MissionInputLeftContainer>
            <S.MissionInputInnerWrapper>
              <S.SelectorWrapper>
                <S.Title style={{marginRight: 'auto'}}>미션 선택</S.Title>
                <Loading/>
              </S.SelectorWrapper>
              <Input title={"미션 이름"} size={"100%"} value={nameValue} onChange={nameHandler}/>
              <Input title={"미션 소개"} size={"100%"} value={aboutValue} onChange={aboutHandler}/>
              <S.SelectorWrapper>
                <S.Title style={{marginRight: 'auto'}}>미션 기간</S.Title>
                <StartToEndRangeDatePicker setMissionStartDate={setMissionStartDate} setMissionEndDate={setMissionEndDate}/>
              </S.SelectorWrapper>
            </S.MissionInputInnerWrapper>
          </S.MissionInputLeftContainer>
          <S.MissionInputRightContainer>
            <AddProblemInputBox title={"문제 추가"} size={"60%"} value={problemValue} onChange={problemHandler} setProblemValue={setProblemValue} setProblemList={setProblemList} problemList={problemList}/>
            <Loading/>
          </S.MissionInputRightContainer>
        </S.MissionInputContainer>
        {isEditMode ? <S.Button type="submit" value={'수정'}/> : <S.Button type="submit" value={'미션 생성'}/>}
      </S.FormContainer>
    </S.Container>
  )
  return (
    <S.Container>
      <S.FormContainer onSubmit={(e) => handleSubmit(e)}>
        <S.MissionInputContainer>
          <S.MissionInputLeftContainer>
            <S.MissionInputInnerWrapper>
              <S.SelectorWrapper>
                <S.Title style={{marginRight: 'auto'}}>미션 선택</S.Title>
                <Selector data={data} setId={setRuleId}/>
              </S.SelectorWrapper>
              <Input title={"미션 이름"} size={"100%"} value={nameValue} onChange={nameHandler}/>
              <Input title={"미션 소개"} size={"100%"} value={aboutValue} onChange={aboutHandler}/>
              <S.SelectorWrapper>
                <S.Title style={{marginRight: 'auto'}}>미션 기간</S.Title>
                <StartToEndRangeDatePicker setMissionStartDate={setMissionStartDate} setMissionEndDate={setMissionEndDate}/>
              </S.SelectorWrapper>
            </S.MissionInputInnerWrapper>
          </S.MissionInputLeftContainer>
          <S.MissionInputRightContainer>
            <AddProblemInputBox title={"문제 추가"} size={"60%"} value={problemValue} onChange={problemHandler} setProblemValue={setProblemValue} setProblemList={setProblemList} problemList={problemList}/>
            <Board category={[["번호", "idx"], ["문제 번호", "num"], ["문제 이름", "title"], ["삭제", "remove"]]} widthRatio={[1, 1, 2, 1]} data={missionProblemState} type={'problem'}/>
          </S.MissionInputRightContainer>
        </S.MissionInputContainer>
        {isEditMode ? <S.Button type="submit" value={'수정'}/> : <S.Button type="submit" value={'미션 생성'}/>}
      </S.FormContainer>
    </S.Container>
  );
};

export default Mission;
