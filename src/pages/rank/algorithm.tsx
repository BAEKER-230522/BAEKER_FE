import styled from "styled-components";
import { themedPalette } from "@/styles/theme";
import { TABLE_CONSTANT } from "@/constant/table";
import { memberApi } from "@/api/memberApi";
import Loading from "@/components/common/loading/Loading";
import MemberTable from "@/components/common/table/MeberTable";

const AlgorithmRank = () => {
  const { data, isLoading } = memberApi.useGetAllMembersQuery({
    page: 0,
    limit: 10,
  });

  if (isLoading)
    return (
      <S.Container>
        <Loading />
      </S.Container>
    );
  return (
    <S.Container>
      <S.Wrapper>
        <MemberTable
          data={data.data}
          category={TABLE_CONSTANT.MEMBER.CATEGORY}
          widthRatio={TABLE_CONSTANT.MEMBER.WIDTH_RATIO}
        />
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
  border-radius: 7px;
  background-color: ${themedPalette.bg_element2};
`;

const S = { Container, Wrapper };
