import styled from "styled-components";
import { RecordContainer } from "../profile/style";
import { Title } from "@/components/common/style";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #2a303c;
`;

const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StudyContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #2a303c;
`

const ContentContainer = styled(RecordContainer)`
  width: 60%;
  height: 60vh;
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
  width: 50%;
`

const MissionInputLeftContainer = styled(MissionInputWrapper)`
  width: 40%;
  align-items: flex-start;
`

const MissionInputRightContainer = styled(MissionInputWrapper)`
  width: 60%;
  display: flex;
  flex-direction : column;
`

const MissionInputInnerWrapper = styled.div``

interface MissionProblemListContainerProps{
  numColumn : number;
}
const MissionProblemListContainer = styled.div<MissionProblemListContainerProps>`
  border-radius: 10px;
  display: grid;  
  background-color : white;
  grid-template-columns: ${props => `repeat(${props.numColumn}, 150px)`};
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
  background-color: white;
  margin-top : 50px;
  margin-bottom : 50px;
`

const MissionStatusContainer = styled.div`
  display: flex;
  width: 65%;
  height: 75%;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`

export const S = {Dot,MissionStatusContainer, ButtonContainer,Container, MemberSolvingStatusContainer,MissionProblemListContainer,MissionInputLeftContainer, MissionInputInnerWrapper,MissionInputRightContainer,ContentContainer, ChartContainer, StatusContainer,Button, StudyContainer ,FormContainer, Title, SelectorWrapper, MissionInputContainer,MissionInputWrapper } ;
