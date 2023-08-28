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
  border-radius: 5px 5px 0px 0px;
  background-color: ${({theme}) => theme.bg_element};
  color : ${({theme}) => theme.text1};
  font-weight: 500;
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
  background-color: ${({theme}) => theme.bg_element};
  color : ${({theme}) => theme.text1};
`;

const ContentWrapper = styled.div<IRatios>`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  &:hover{
    background-color: ${({theme}) => theme.bg_element3};
  }
  &:last-child {

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
  width: 100%;
  background-color: ${({theme}) => theme.bg_element};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 0px 0px 7px 7px;
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
