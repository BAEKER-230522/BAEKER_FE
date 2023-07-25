import { S } from "./style";
import Board from "@/components/common/Board/Board";
import { studyApi } from "@/api/studyApi";
import Loading from "@/components/Loading/Loading";

const StudyRank = () => {
  const {data, isLoading} = studyApi.useGetStudyInfoListQuery(0)
  
  if(isLoading){
    return (
      <S.Container>
        <Loading/>
      </S.Container>
    )
  }
  
  return (
    <S.Container>
      <Board category={[ ["스터디", "name"], ["소개", "about"], ["인원", "capacity"], ["방장", "leader"]]} widthRatio={[1, 2, 1, 1]} data={data.data} type={"study"}/>
    </S.Container>
  );
};

export default StudyRank;
