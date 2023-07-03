import Board from "@/components/common/board/Board";
import Search from "@/components/rule/search";
import { S } from "./style";
import { ruleApi } from "@/api/ruleApi";

const Rule = () => {
  const {data, isLoading} = ruleApi.useGetAllRulesQuery({});
  
  if(isLoading) return <div>Loading...</div>
  return (
    <S.Container>
      <Search />
      <Board category={[["제목", "name"], ["소개", "about"], ["OB","provider" ]]} widthRatio={[1, 2, 1]} data={data.data} type={"rule"}/>
    </S.Container>
  );
};

export default Rule;
