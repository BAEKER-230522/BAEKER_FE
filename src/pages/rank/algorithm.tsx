import { S } from "./style";
import Board from "@/components/common/Board/Board";
import { memberApi } from "@/api/memberApi";

const AlgorithmRank = () => {
  const {data, isLoading} = memberApi.useGetAllMembersQuery({});

  console.log(data);
  if(isLoading) return <div>Loading...</div>
  return (
    <S.Container>
      <Board category={[["랭킹", "id"], ["이름", "nickname"]]} widthRatio={[1, 1]} data={data.data} type={"member"}/>
    </S.Container>
  );
};

export default AlgorithmRank;
