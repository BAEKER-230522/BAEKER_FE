import Board from "@/components/common/Board/Board";
import Search from "@/components/Rule/Search";
import { S } from "./style";
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
