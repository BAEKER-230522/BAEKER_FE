import styled from "styled-components";
import { themedPalette } from "@/styles/theme";
import { Title } from "@/components/common/style";
import Input from "@/components/common/input";
import useInput from "@/hooks/useInput";
import RadioButtonGroup from "@/components/rule/radio-button-group";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ruleApi } from "@/api/ruleApi";
import { toast } from "react-toastify";
import { PageContainer } from "@/styles/common.style";
const CreateStudy = () => {
  const [nameValue, setNameValue, nameHandler] = useInput("");
  const [aboutValue, setAboutValue, aboutHandler] = useInput("");
  const [xpValue, setXpValue, xpHandler] = useInput("");
  const [countValue, setCountValue, countHandler] = useInput("");
  const [levelValue, setLevelValue] = useState("");
  const [createRule] = ruleApi.useCreateRuleMutation();
  const [modifyRule] = ruleApi.useUpdateRuleMutation();
  const router = useRouter();
  const isEditMode = Object.keys(router.query).length !== 0 ? true : false;

  // Object.keys(router.query).length !== 0 경우는 rule 수정하는 상태이다.
  useEffect(() => {
    if (isEditMode) {
      setNameValue(String(router.query?.name!));
      setAboutValue(String(router.query?.about!));
      setXpValue(String(router.query?.xp!));
      setCountValue(String(router.query?.count));
      setLevelValue(String(router.query.level));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreateStudy = (e: any) => {
    e.preventDefault();
    if (isEditMode) {
      modifyRule({
        id: router.query.id,
        body: {
          name: nameValue,
          about: aboutValue,
          xp: xpValue,
          count: countValue,
          provider: "BaekJoon",
          difficulty: levelValue,
        },
      });
      toast("규칙 수정 완료");
    } else {
      createRule({
        name: nameValue,
        about: aboutValue,
        xp: xpValue,
        count: countValue,
        provider: "BaekJoon",
        difficulty: levelValue,
      });
      toast("규칙 생성 완료");
    }
    router.push({ pathname: "/rule/list" });
  };
  return (
    <S.Container>
      <S.FormContainer onSubmit={(e) => handleCreateStudy(e)}>
        <Input
          title={"규칙 명"}
          size={"40%"}
          value={nameValue}
          onChange={nameHandler}
        />
        <Input
          title={"규칙 소개"}
          size={"40%"}
          value={aboutValue}
          onChange={aboutHandler}
        />
        <Input
          title={"경험치"}
          size={"40%"}
          value={xpValue}
          onChange={xpHandler}
        />
        <Input
          title={"문제 풀이 수"}
          size={"40%"}
          value={countValue}
          onChange={countHandler}
        />
        <RadioButtonGroup setLevelValue={setLevelValue} />
        {isEditMode ? (
          <S.Button type="submit" value={"규칙 수정"} />
        ) : (
          <S.Button type="submit" value={"규칙 생성"} />
        )}
      </S.FormContainer>
    </S.Container>
  );
};

export default CreateStudy;

const RecordContainer = styled.div`
  width: 80%;
  padding: 20px;
  height: 65vh;
  display: flex;
  background-color: ${themedPalette.bg_element2};
  border-radius: 10px;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 100px;
`;

const Container = styled(PageContainer)`
  height: 95vh;
`;

const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StudyContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #2a303c;
`;

const ContentContainer = styled(RecordContainer)`
  width: 60%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChartContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.input`
  width: 30%;
  height: 50px;
  border-radius: 10px;
  background-color: ${themedPalette.bg_element4};
  color: ${themedPalette.text2};
  font-weight: 500;
  cursor: pointer;
  border: none;
`;

const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  align-items: start;
  justify-content: start;
  width: 40%;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  height: 40px;
  margin-top: 10px;
`;

const MissionInputContainer = styled.div`
  display: flex;
  width: 90%;
`;

const MissionInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const MissionInputLeftContainer = styled(MissionInputWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const MissionInputRightContainer = styled(MissionInputWrapper)`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const MissionInputInnerWrapper = styled.div`
  width: 50%;
`;

interface MissionProblemListContainerProps {
  numColumn: number;
}
const MissionProblemListContainer = styled.div<MissionProblemListContainerProps>`
  border-radius: 10px;
  display: grid;
  background-color: white;
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
  background-color: white;
  margin-top: 50px;
`;

const MissionStatusContainer = styled.div`
  display: flex;
  width: 75%;
  height: 85%;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  overflow-x: scroll;
`;

const MissionProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const Problem = styled.div`
  cursor: pointer;
  color: #6495ed;
`;

const S = {
  Problem,
  Dot,
  MissionStatusContainer,
  MissionProgressContainer,
  ButtonContainer,
  Container,
  MemberSolvingStatusContainer,
  MissionProblemListContainer,
  MissionInputLeftContainer,
  MissionInputInnerWrapper,
  MissionInputRightContainer,
  ContentContainer,
  ChartContainer,
  StatusContainer,
  Button,
  StudyContainer,
  FormContainer,
  Title,
  SelectorWrapper,
  MissionInputContainer,
  MissionInputWrapper,
};
