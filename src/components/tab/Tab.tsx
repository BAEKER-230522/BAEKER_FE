import { useChangeTabState } from "@/hooks/useChangeTabState";
import { S } from "./styled";

const Tab = () => {
  const { tabState, handleTabState } = useChangeTabState();
  console.log(tabState);

  return (
    <S.TabContainer tabState={tabState}>
      <div onClick={() => handleTabState(0)}>백준</div>
      <div onClick={() => handleTabState(1)}>프로그래머스</div>
      <div onClick={() => handleTabState(2)}>스터디</div>
      <div onClick={() => handleTabState(3)}>가입 대기</div>
    </S.TabContainer>
  );
};

export default Tab;
