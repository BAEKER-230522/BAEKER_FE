import styled from "styled-components";
import { themedPalette } from "@/styles/theme";
import { Title } from "@/components/common/style";
import Input from "@/components/common/input";
import useInput from "@/hooks/useInput";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ruleApi } from "@/api/ruleApi";
import useMissionEdit from "@/hooks/useMissionEdit";
import Board from "@/components/common/board/Board";
import AddProblemInputBox from "@/components/study/add-problem-button";
import { useSelector } from "react-redux";
import Loading from "@/components/common/loading/Loading";
import { PageContainer } from "@/styles/common.style";
import StartToEndRangeDatePicker from "@/components/common/calendar/RangeDatePicker";

const CreateMission = () => {
  const router = useRouter();
  const {param} = router.query
  const isEditMode = Object.keys(router.query).length > 1 ? true : false;
  const {handleCreateMission, handleUpdateStudy} = useMissionEdit()
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

export default CreateMission;

const Container = styled(PageContainer)`
  height: 95vh;
`;

const FormContainer = styled.form`
  width: 80%;
  height: 90%;
  background-color: ${themedPalette.bg_element2};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`

const Button = styled.input`
  width: 30%;
  height: 50px;
  border-radius: 10px;
  background-color: ${themedPalette.bg_element4};
  color: ${themedPalette.text2};
  font-weight: 500;
  cursor: pointer;
  border: none;
  margin-top : 50px;
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

const MissionInputLeftContainer = styled(MissionInputWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`

const MissionInputRightContainer = styled(MissionInputWrapper)`
  width: 50%;
  display: flex;
  flex-direction : column;
`

const MissionInputInnerWrapper = styled.div`
  width: 50%;
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



const S = {Dot,Container,MissionInputLeftContainer, MissionInputInnerWrapper,MissionInputRightContainer,Button ,FormContainer, Title, SelectorWrapper, MissionInputContainer, MissionInputWrapper } ;
