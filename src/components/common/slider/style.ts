import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 20px;

`;

const Slider = styled.input`
  accent-color: ${(props) => props.theme.backgronudColors.blue};
  transition: 0.3s ease-in-out;
  background: ${(props) => props.theme.backgronudColors.blue};
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Value = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  margin-left: 5px;
  span {
    width: 5%;
    height: 10px;
    color: ${(props) => props.theme.colors.blue};
  }
`;

export const S = { Container, Slider, Value, Title };
