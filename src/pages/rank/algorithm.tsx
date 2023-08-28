import styled from "styled-components";
import { themedPalette } from "@/styles/theme";
import Board from "@/components/common/board/Board";
import { memberApi } from "@/api/memberApi";
import Loading from "@/components/common/loading/Loading";

const AlgorithmRank = () => {
  const {data, isLoading} = memberApi.useGetAllMembersQuery({});
  console.log(data);
  if(isLoading) return (
    <S.Container>
      <Loading/>
    </S.Container>
  )
  return (
    <S.Container>
      <S.Wrapper>
        <Board category={[["랭킹", "id"], ["이름", "nickname"]]} widthRatio={[1, 1]} data={data.data} type={"member"}/>
      </S.Wrapper>
    </S.Container>
  );
};

export default AlgorithmRank;

const Container = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${themedPalette.bg_element};
`;
// check
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  border-radius : 7px;
  background-color: ${themedPalette.bg_element2};
`

const S = { Container, Wrapper };
