import styled from "styled-components";

const Wrapper = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  border-radius: 7px;
  padding: 10px;
  background-color: ${({theme}) => theme.backgroundColor};
`;

export const S = {
  Wrapper,
};
