import styled from "styled-components";
import { themedPalette } from "./theme";

export const PageContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${themedPalette.bg_element};
  transition: background-color 0.2s ease;
`;
