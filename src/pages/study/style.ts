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
  width: 80%;
  height: 80%;
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

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   background-color: #2a303c;
// `;
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
  background-color: aqua;
  height: 50px;
  border-radius: 10px;
  background-color: #661ae6;
  color: white;
  font-weight: 500;
  cursor: pointer;
  border: none;
`;

const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom : 15px;
  width: 40%;
`


export const S = { Container, ContentContainer, ChartContainer, StatusContainer,Button, StudyContainer ,FormContainer, Title, SelectorWrapper};
