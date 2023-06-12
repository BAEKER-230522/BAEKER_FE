import styled from "styled-components";
import { RecordContainer } from "../profile.styled";
const Container = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #2a303c;
`;

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

export const S = { Container, ContentContainer, ChartContainer, StatusContainer };
