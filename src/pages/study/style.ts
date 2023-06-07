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
`;

export const S = { Container, ContentContainer };
