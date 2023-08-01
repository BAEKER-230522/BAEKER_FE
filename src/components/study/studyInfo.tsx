import { IMG_URL } from "@/pages/mock";
import { S } from "./style";
import { studyApi } from "@/api/studyApi";
import { useRouter } from "next/router";
import RequestModal from "../common/Modal/RequestModal";
import Loading from "../Loading/Loading";

interface IProps{
  isUserStudy: boolean;
  memberId: number;
}

const StudyInfo = ({isUserStudy, memberId}:IProps) => {
  const router = useRouter();
  const {studyId} = router.query;  
  const {data, isLoading} = studyApi.useGetStudyInfoQuery(studyId)

  if(isLoading) return (
    <S.Container>
      <S.Img src={IMG_URL} />
      <S.StudyInfoContainer>
        <Loading/>
      </S.StudyInfoContainer>
    </S.Container>
  )
  return (
    <S.Container>
      <S.Img src={IMG_URL} />
      <S.StudyInfoContainer>
        <S.Title>{data.data.name}</S.Title>
        <S.About style={{color:'white'}}>{data.data.about}</S.About>
        {
          isUserStudy ? 
          <S.ButtonWrapper>
            <button onClick={(e) =>{e.preventDefault(); router.push({pathname:"/study/rule", query:{param: studyId }})}}>미션 만들기</button>
            <button onClick={(e) =>{e.preventDefault(); router.push({pathname:"/study/manage", query:{name:data.data.name, id:studyId, about:data.data.about, capacity: data.data.capacity }})}}>스터디 수정하기</button>
          </S.ButtonWrapper>
        :
          <RequestModal memberId={memberId} studyId={String(studyId)}/>
        }
      </S.StudyInfoContainer>
    </S.Container>
  );
};

export default StudyInfo;
