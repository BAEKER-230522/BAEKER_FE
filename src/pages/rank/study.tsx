import styled from "styled-components";
import Board from "@/components/common/board/Board";
import { studyApi } from "@/api/studyApi";
import Loading from "@/components/common/loading/Loading";

const StudyRank = () => {
  const {data, isLoading} = studyApi.useGetAllStudyListQuery({})
  
  if(isLoading){
    return (
      <S.Container>
        <Loading/>
      </S.Container>
    )
  }
  
  return (
    <S.Container>
      <S.Wrapper>
        <Board category={[ ["스터디", "name"], ["소개", "about"], ["인원", "capacity"], ["방장", "leader"]]} widthRatio={[1, 2, 1, 1]} data={data.data} type={"study"}/>
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
  background-color: ${({theme}) => theme.backgroundColor};
`;
// check
const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  background-color: ${({theme}) => theme.wrapperBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`

const S = { Container, Wrapper };