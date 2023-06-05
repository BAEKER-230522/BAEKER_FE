import { useChangeTabState } from "@/hooks/useChangeTabState";
import { S } from "./styled";

const Tab = () => {
  const { tabState, handleTabState } = useChangeTabState();

  return (
    <S.TabContainer>
      <S.Element onClick={() => handleTabState(0)}>백준</S.Element>
      <S.Element onClick={() => handleTabState(1)}>프로그래머스</S.Element>
      <S.Element onClick={() => handleTabState(2)}>스터디</S.Element>
      <S.Element onClick={() => handleTabState(3)}>가입 대기</S.Element>
    </S.TabContainer>
  );
};

export default Tab;
