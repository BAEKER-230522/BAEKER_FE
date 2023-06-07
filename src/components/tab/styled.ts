import styled from "styled-components";

const TabContainer = styled.div<{ tabState: number }>`
  display: flex;
  height: 20px;
  width: 500px;
  color: white;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
  div:nth-child(${(props) => props.tabState + 1}) {
    border-bottom: 3px solid black;
  }
  div {
    padding: 5px;
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
  background-color: #2a303c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 7px;
  padding: 5px;
`;

const RecordWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  color: #a6adbb;

  &:nth-child(2) {
    border-bottom: 0.5px solid #a6adbb;
    border-top: 0.5px solid #a6adbb;
  }
`;

const RecordElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
  h1 {
    color: #f8f9fa;
    font-size: 2rem;
    font-weight: 600;
  }

  h3 {
    color: #747b88;
    font-size: 1.3rem;
  }

  div {
    display: flex;
  }
`;

export const S = {
  TabContainer,
  RecordContainer,
  RecordWrapper,
  RecordElement,
};
