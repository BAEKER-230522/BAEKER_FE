import styled from "styled-components";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { themedPalette } from "@/styles/theme";

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
  background-color: ${themedPalette.bg_element};
  display: flex;
  align-items: start;
  flex-direction: column;
  border-radius: 10px;
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
  background-color: ${themedPalette.bg_element};
  color: ${themedPalette.text1};
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

interface IContentContainerProps {
  height?: string;
  overflowY?: "scroll" | "hidden";
}

const ContentContainer = styled.div<IContentContainerProps>`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background-color: ${themedPalette.bg_element};
  color: ${themedPalette.text1};
  height: ${(props) => props.height || "auto"};
  overflow-y: ${(props) => props.overflowY || "visible"};
`;

const ContentWrapper = styled.div<IRatios>`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${themedPalette.bg_element3};
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
  background-color: ${themedPalette.bg_element};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 0px 0px 7px 7px;
  color: ${themedPalette.text1};
`;

const PaginationElement = styled.span`
  margin: 5px;
  padding: 5px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const SelectedPaginationElement = styled(PaginationElement)`
  background-color: ${themedPalette.bg_element2};
  border-radius: 10px;
`;

const ContentCell = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 33%;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100% !important;
  margin-left: 25%;
`;

type ColorBoxProps = {
  color?: "blue" | "red" | "green";
};

const ColorBox = styled.span<ColorBoxProps>`
  background-color: ${(props) => {
    switch (props.color) {
      case "blue":
        return "#1877FF";
      case "green":
        return "#5bc59c";
      case "red":
        return "#e31d2e";
      default:
        return "#1877FF"; // 기본값 설정
    }
  }};
  padding: 5px 10px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  color: white;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 700;
`;

const Cell = styled.div`
  height: 20px;
  text-align: center;
  line-height: 20px;
  color: ${themedPalette.text1};
  font-size: 14px;
  font-weight: 700;
`;

export const S = {
  Cell,
  ContentCell,
  Container,
  HeaderContainer,
  ContentContainer,
  ContentWrapper,
  PaginationContainer,
  PrevBtn,
  NextBtn,
  PaginationElement,
  ButtonWrapper,
  SelectedPaginationElement,
  UserInfoContainer,
  UserInfoWrapper,
  ColorBox,
};
