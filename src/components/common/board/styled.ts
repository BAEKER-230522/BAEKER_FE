import styled from "styled-components";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const PrevBtn = styled(GrFormPrevious)`
  background-color: white;
  padding: 3px;
  border-radius: 50%;
  cursor: pointer;
`;

const NextBtn = styled(GrFormNext)`
  background-color: white;
  padding: 3px;
  border-radius: 50%;
  cursor: pointer;
`;

const Container = styled.div`
  width: 80%;
  background-color: #242933;
  display: flex;
  align-items: start;
  flex-direction: column;
  border-radius: 10px;
  color: white;
`;

interface IRatios {
  target_nth: number;
  ratio: number;
}

const HeaderContainer = styled.div<IRatios>`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: #242933;
  border-radius: 5px 5px 0px 0px;

  height: 70px;
  div {
    text-align: center;
    width: ${(props) => props.ratio}%;
    &:nth-child(${(props) => props.target_nth + 1}) {
      width: ${(props) => props.ratio * 2}%;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background-color: #2a303c;
`;

const ContentWrapper = styled.div<IRatios>`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  &:last-child {
    border-radius: 0 0 5px 5px;
    z-index: 50;
  }
  border-bottom: 0.5px solid #a6adbb;
  div {
    text-align: center;
    cursor: pointer;

    width: ${(props) => props.ratio}%;
    &:nth-child(${(props) => props.target_nth + 1}) {
      width: ${(props) => props.ratio * 2}%;
    }
  }
`;

const PaginationContainer = styled.div`
  width: 40%;

  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const PaginationElement = styled.span`
  margin: 5px;
  padding: 5px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
`
export const S = {
  Container,
  HeaderContainer,
  ContentContainer,
  ContentWrapper,
  PaginationContainer,
  PrevBtn,
  NextBtn,
  PaginationElement,
  ButtonWrapper,
};
