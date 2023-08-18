import { S } from "./style";
import Board from "@/components/common/board/Board";
import { memberApi } from "@/api/memberApi";
import Loading from "@/components/Loading/Loading";

const AlgorithmRank = () => {
  const {data, isLoading} = memberApi.useGetAllMembersQuery({});
  if(isLoading) return (
    <S.Container>
      <Loading/>
    </S.Container>
  )
  return (
    <S.Container>
      <Board category={[["랭킹", "id"], ["이름", "nickname"]]} widthRatio={[1, 1]} data={data.data} type={"member"}/>
    </S.Container>
  );
};

export default AlgorithmRank;
