import { S } from "./style";
import StudyInfo from "@/components/study/studyInfo";
import Tab from "@/components/tab/Tab";
import Board from "@/components/common/board/Board";
import SolvedRecord from "@/components/tab/SolvedRecord";
import LineChart from "@/components/chart/chart";
import { useSelector } from "react-redux";
import SolveStatus from "@/components/common/solveStatus";

const StudyDetail = () => {
  const tabState = useSelector((state: any) => {
    return state.tab.studyTabState;
  });
  const TAB_ELEMENTS = ["현황", "미션", "멤버", "가입요청"];

  // switch문으로 할 경우 pagination을 공유하게 된다. 왜그럴까 ?
  // const Component = (num: number) => {
  //   switch (num) {
  //     case 0:
  //       return (
  //         <S.StatusContainer>
  //           <SolveStatus />
  //           <S.ChartContainer>
  //             <SolvedRecord />
  //             <LineChart />
  //           </S.ChartContainer>
  //         </S.StatusContainer>
  //       );
  //     case 1:
  //       return <Board category={["규칙", "소개", "작성일"]} widthRatio={[1, 2, 1]} test={1} />;
  //     case 2:
  //       return <Board category={["이름", "랭킹", "가입한 스터디"]} widthRatio={[2, 1, 1]} test={2} />;
  //     case 3:
  //       return <Board category={["이름", "랭킹", "상태"]} widthRatio={[1, 1, 1]} test={3} />;
  //   }
  // };
  return (
    <S.Container>
      <StudyInfo />
      <Tab elements={TAB_ELEMENTS} type="study" />
      {/* <S.ContentContainer>{Component(tabState)}</S.ContentContainer> */}
      <S.ContentContainer>
        {tabState === 0 && (
          <>
            <S.StatusContainer>
              <SolveStatus />
              <S.ChartContainer>
                <SolvedRecord />
                <LineChart />
              </S.ChartContainer>
            </S.StatusContainer>
          </>
        )}
        {tabState === 1 && <Board category={["규칙", "소개", "작성일"]} widthRatio={[1, 2, 1]} />}
        {tabState === 2 && <Board category={["이름", "랭킹", "가입한 스터디"]} widthRatio={[2, 1, 1]} />}
        {tabState === 3 && <Board category={["이름", "랭킹", "상태"]} widthRatio={[1, 1, 1]} />}
      </S.ContentContainer>
    </S.Container>
  );
};

export default StudyDetail;