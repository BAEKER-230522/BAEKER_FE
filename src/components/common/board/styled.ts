import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  height: 100%;
  background-color: aqua;
  display: flex;
  align-items: start;
  flex-direction: column;
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
  background-color: white;
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
  background-color: blanchedalmond;
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
  div {
    text-align: center;
    width: ${(props) => props.ratio}%;
    &:nth-child(${(props) => props.target_nth + 1}) {
      width: ${(props) => props.ratio * 2}%;
    }
  }
`;

const PaginationContainer = styled.div`
  width: 40%;
  background-color: azure;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const S = {
  Container,
  HeaderContainer,
  ContentContainer,
  ContentWrapper,
  PaginationContainer,
};
