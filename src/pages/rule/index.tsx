import Board from "@/components/common/table/Board";
import { themedPalette } from "@/styles/theme";
import Search from "@/components/rule/search";
import styled from "styled-components";
import { ruleApi } from "@/api/ruleApi";
import EmptyList from "@/components/common/empty/EmptyList";
import { PageContainer } from "@/styles/common.style";

const Rule = () => {
  const { data, isLoading } = ruleApi.useGetAllRulesQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (data.length === 0) return <EmptyList />;
  return (
    <S.Container>
      <Search />
      <Board
        category={[
          ["제목", "name"],
          ["소개", "about"],
          ["OB", "provider"],
        ]}
        widthRatio={[1, 2, 1]}
        data={data.data}
        type={"rule"}
      />
    </S.Container>
  );
};

export default Rule;

const Container = styled(PageContainer)`
  height: 95vh;
`;

const S = { Container };
