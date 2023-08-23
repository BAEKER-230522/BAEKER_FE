import Board from "@/components/common/board/Board";
import Search from "@/components/rule/search";
import styled from "styled-components";
import { ruleApi } from "@/api/ruleApi";
import EmptyList from "@/components/EmptyList/EmptyList";

const Rule = () => {
  const {data, isLoading} = ruleApi.useGetAllRulesQuery({});
  
  if(isLoading) return <div>Loading...</div>
  if(data.length === 0) return <EmptyList/>
  return (
    <S.Container>
      <Search />
      <Board category={[["제목", "name"], ["소개", "about"], ["OB","provider" ]]} widthRatio={[1, 2, 1]} data={data.data} type={"rule"}/>
    </S.Container>
  );
};

export default Rule;

const Container = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgronudColors.white};
`;

const S = { Container };