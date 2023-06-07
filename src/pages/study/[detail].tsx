import { S } from "./style";
import StudyInfo from "@/components/study/studyInfo";
import Tab from "@/components/tab/Tab";
import Board from "@/components/common/board/Board";
import SolvedRecord from "@/components/tab/SolvedRecord";
import LineChart from "@/components/chart/chart";
import { useSelector } from "react-redux";

const StudyDetail = () => {
  const tabState = useSelector((state: any) => {
    return state.tab.studyTabState;
  });
  const TAB_ELEMENTS = ["현황", "미션", "멤버"];

  const Component = (num: number) => {
    switch (num) {
      case 0:
        return (
          <>
            <SolvedRecord />
            <LineChart />
          </>
        );
      case 1:
        return <Board category={["규칙", "소개", "작성일"]} widthRatio={[1, 2, 1]} />;
      case 2:
        return <Board category={["이름", "랭킹", "가입한 스터디"]} widthRatio={[2, 1, 1]} />;
    }
  };
  return (
    <S.Container>
      <StudyInfo />
      <Tab elements={TAB_ELEMENTS} type="study" />
      <S.ContentContainer>{Component(tabState)}</S.ContentContainer>
    </S.Container>
  );
};

export default StudyDetail;
