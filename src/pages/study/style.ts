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

export const S = { Container, MissionInputLeftContainer, MissionInputInnerWrapper,MissionInputRightContainer,ContentContainer, ChartContainer, StatusContainer,Button, StudyContainer ,FormContainer, Title, SelectorWrapper, MissionInputContainer,MissionInputWrapper } ;
