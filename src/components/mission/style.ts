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

const Button = styled.button`
  text-align: center;
  width: 120px;
  font-size: 14px;
  height: 35px;
  padding: 4px 18px;
  border-radius: 7px;
  outline: none;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-color: ${themedPalette.bg_element4};
  color: ${themedPalette.text1};
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
`;

const EditorStatusButton = styled(Button)`
  border-radius: 0px;
  &:first-child {
    border-top-left-radius: 5px;
  }
  &:last-child {
    border-top-right-radius: 5px;
  }
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
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 10px;
`;

const CodeModal = styled.div`
  width: 70%;
  height: 80%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
  overflow-y: scroll;
  box-sizing: border-box;
`;

const ButtonWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  margin-top: 5px;
`;

type HighlighterType = {
  status: boolean;
};

const CodeTextArea = styled.textarea<HighlighterType>`
  width: 90%;
  height: 85%;
  margin: 0;
  min-height: 85%;
  resize: none;
  box-sizing: border-box;
  padding: 10px;
  display: ${(props) => (props.status ? "none" : "block")};
`;

const StatusWrapper = styled.div`
  width: 90%;
`;

const CodeHighlighterContainer = styled.div<HighlighterType>`
  box-sizing: border-box;
  display: ${(props) => (props.status ? "block" : "none")};
  width: 90%;
  max-height: 85%;
  overflow-y: scroll;
`;

const CodeReviewModalBody = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  overflow-y: scroll;
`;

const ReviewModal = styled.div`
  width: 90%;
  height: 80%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const CodeSection = styled.div`
  box-sizing: border-box;
  width: 70%;
  height: 100%;
  overflow-y: scroll;
`;

const ReplySection = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 10px;
`;

const ReplyList = styled.div`
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  div {
    width: 90%;
    min-height: 100px;
    border: 1px solid ${themedPalette.text1};
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 7px;
  }
`;
const ReplyInput = styled.textarea`
  height: 15%;
  resize: none;
  padding: 5px;
`;

const CodeReviewModalTop = styled.div`
  width: 100%;
`;

export const S = {
  CodeReviewModalBody,
  CodeReviewModalTop,
  ReplyList,
  ReplyInput,
  ReplySection,
  CodeSection,
  ReviewModal,
  StatusWrapper,
  CodeTextArea,
  ButtonWrapper,
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
  Button,
  EditorStatusButton,
  CodeHighlighterContainer,
};
