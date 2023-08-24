import styled from "styled-components";

const Container = styled.div`
  background-color: ${({theme}) => theme.backgronudColor};
  width: 80%;
  height:200px;
  border-radius: 10px;
  color: ${({theme}) => theme.color};
  font-size: 3rem;
  font-weight : 600;
  line-height: 200px;
  text-align: center;
`

export const S = {Container}