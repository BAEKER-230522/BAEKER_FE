import styled from "styled-components";
import { themedPalette } from "@/styles/theme";
import { TABLE_CONSTANT } from "@/constant/table";
import { studyApi } from "@/api/studyApi";
import Loading from "@/components/common/loading/Loading";
import BasicTable from "@/components/common/table/BasicTable";

const StudyRank = () => {
  const { data, isLoading } = studyApi.useGetAllStudyListQuery({
    page: 0,
    limit: 10,
  });

  if (isLoading) {
    return (
      <S.Container>
        <Loading />
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Wrapper>
        <BasicTable
          data={data.data}
          category={TABLE_CONSTANT.STUDY.CATEGORY}
          widthRatio={TABLE_CONSTANT.STUDY.WIDTH_RATIO}
          url="study"
          routeType="defaultRoute"
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default StudyRank;

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
  width: 80%;
  height: 80%;
  background-color: ${themedPalette.bg_element2};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;

const S = { Container, Wrapper };
