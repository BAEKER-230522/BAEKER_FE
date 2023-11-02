import styled, { keyframes } from "styled-components";

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  z-index: 999;
`;
const Spinner = styled.div`
  z-index: 999;
  width: 30px;
  height: 30px;
  border: 3px solid #f3f3f3; /* Light grey */
  border-top: 3px solid #383636; /* Black */
  border-radius: 50%;
  animation: ${spinner} 1.5s linear infinite;
`;
export const S = { LoadingContainer, Spinner };
