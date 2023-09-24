import styled from "styled-components";
import { themedPalette } from "@/styles/theme";

const MissionInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 180px;
  margin-bottom: 70px;
  background-color: ${themedPalette.bg_element2};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
  height: 100%;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 2rem;
  color: ${themedPalette.text1};
  margin-bottom: 20px;
`;

const About = styled.p`
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: ${themedPalette.text3};
`;

const Divider = styled.div`
  height: 80%;
  width: 0px;
  border-right: 1px solid ${themedPalette.bg_element};
`;

interface MissionProblemListContainerProps {
  numColumn: number;
}

const MissionProblemListContainer = styled.div<MissionProblemListContainerProps>`
  border-radius: 10px;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.numColumn}, 150px)`};
  margin-bottom: 20px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: #e7e3e3;
    border-radius: 5px;
    margin: 2px;
  }
`;

interface ColorProp {
  color: string;
}
const Dot = styled.span<ColorProp>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const MemberSolvingStatusContainer = styled.div`
  border-radius: 10px;
  margin-top: 50px;
`;

const Problem = styled.div`
  cursor: pointer;
  color: #6495ed;
`;

const CodeButton = styled.button`
  background-color: black;
  cursor: pointer;
  color: white;
  position: absolute;
  right: 5px;
  bottom: 5px;
  border-radius: 5px;
  font-size: 10px;
  padding: 3px 5px;
  outline: none;
  border: none;
`;

const StatusBoxContainer = styled.div`
  position: relative;
`;

const CodeModalContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const CodeModal = styled.div`
  width: 50%;
  height: 80%;
  background-color: white;
`;

export const S = {
  CodeModal,
  StatusBoxContainer,
  CodeButton,
  Problem,
  MissionInfoContainer,
  About,
  Title,
  TitleContainer,
  Divider,
  MissionProblemListContainer,
  Dot,
  MemberSolvingStatusContainer,
  CodeModalContainer,
};
