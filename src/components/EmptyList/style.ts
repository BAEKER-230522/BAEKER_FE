import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.backgronudColors.white};
  width: 80%;
  height:200px;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.black};
  font-size: 3rem;
  font-weight : 600;
  line-height: 200px;
  text-align: center;
`

export const S = {Container}