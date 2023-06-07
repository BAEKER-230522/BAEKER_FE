import { useChangeTabState } from "@/hooks/useChangeTabState";
import { S } from "./styled";

interface ITab {
  elements: string[];
  type: string;
}

const Tab = ({ elements, type }: ITab) => {
  const { tabState, handleTabState } = useChangeTabState(type);

  return (
    <S.TabContainer tabState={tabState}>
      {elements.map((e, idx) => (
        <div key={idx} onClick={() => handleTabState(idx)}>
          {e}
        </div>
      ))}
    </S.TabContainer>
  );
};

export default Tab;
