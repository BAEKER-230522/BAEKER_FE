import styled from "styled-components";
import { themedPalette } from "@/styles/theme";
import { TABLE_CONSTANT } from "@/constant/table";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import Loading from "@/components/common/loading/Loading";
import MemberTable from "@/components/common/table/MeberTable";
import { getAllMembers, useMembersQuery } from "@/hooks/api/useMembersQuery";
import { GetServerSideProps } from "next";
import { QUERY_KEY } from "@/constant/key";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const qc = new QueryClient();
  await useMembersQuery({ page: 0, limit: 100, qc });

  return {
    props: {
      dehydratedState: dehydrate(qc),
    },
  };
};

const AlgorithmRank = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.MEMBER],
    queryFn: () => getAllMembers({ page: 0, limit: 100 }),
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
  width: 100%;
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
