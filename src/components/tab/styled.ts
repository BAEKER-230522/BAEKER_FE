import styled from "styled-components";

const TabContainer = styled.div<{ tabState: number }>`
  display: flex;
  height: 20px;
  width: 500px;

  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
  div:nth-child(${(props) => props.tabState + 1}) {
    border-bottom: 3px solid black;
  }
  div {
    transition: 0.3s ease-in-out;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    border-bottom: 3px solid white;
    height: 100%;
  }
`;

const RecordContainer = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RecordWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  border-bottom: 0.5px solid black;
`;

const RecordElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background-color: antiquewhite;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }

  div {
    display: flex;
  }
`;

export const S = {
  TabContainer,
  Element,
  RecordContainer,
  RecordWrapper,
  RecordElement,
};
