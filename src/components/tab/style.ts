import styled from "styled-components";

const TabContainer = styled.div<{ tabState: number }>`
  display: flex;
  height: 20px;
  width: 500px;
  color: ${(props) => props.theme.colors.black};
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
  div:nth-child(${(props) => props.tabState + 1}) {
    border-bottom: 3px solid black;
    font-weight: 500;
  }
  div {
    cursor: pointer;
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
  background-color: ${(props) => props.theme.backgronudColors.white};
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
  color: ${(props) => props.theme.backgronudColors.black};

  &:nth-child(2) {
    border-bottom: 0.5px solid ${(props) => props.theme.backgronudColors.gray};
    border-top: 0.5px solid ${(props) => props.theme.backgronudColors.gray};
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
    color: ${(props) => props.theme.colors.black};
  }

  div {
    display: flex;
  }
`;

const BigFont = styled.div`
    color: ${(props) => props.theme.backgronudColors.black};
    font-size: 2rem;
    font-weight: 600;
`

const SmallFont = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.backgronudColors.black};
  font-size: 1rem;
  margin-left: 2px;

`

export const S = {
  BigFont,
  SmallFont,
  TabContainer,
  RecordContainer,
  RecordWrapper,
  RecordElement,
};
