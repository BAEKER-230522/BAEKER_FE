import { S } from "./style";

interface ITab {
  elements: string[];
  tabState: number;
  setTabState: React.Dispatch<React.SetStateAction<number>>;
}

const Tab = ({ elements, tabState, setTabState }: ITab) => {
  return (
    <S.TabContainer tabState={tabState}>
      {elements.map((e, idx) => (
        <div key={idx} onClick={() => setTabState(idx)}>
          {e}
        </div>
      ))}
    </S.TabContainer>
  );
};

export default Tab;
