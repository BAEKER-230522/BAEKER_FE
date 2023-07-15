import { IMG_URL } from "@/pages/mock";
import { S } from "./style";
import { studyApi } from "@/api/studyApi";
import { useRouter } from "next/router";
import { USER_NUMBER } from "@/util/constant";
import RequestModal from "../common/Modal/RequestModal";
const StudyInfo = () => {
  const router = useRouter();
  const {detail : studyId} = router.query;  
  const {data, isLoading} = studyApi.useGetStudyInfoQuery(studyId)
  
  const [joinStudy] = studyApi.useJoinStudyMutation()

  const handleJoinStudy = async () => {
    await joinStudy({"study":studyId, "member":USER_NUMBER, "msg":'test'})
  }
  if(isLoading) return <div>Loading...</div>
  return (
    <S.Container>
      <S.Img src={IMG_URL} />
      <S.StudyInfoContainer>
        <S.Title>{data.data.name}</S.Title>
        <S.About style={{color:'white'}}>{data.data.about}</S.About>
        {/* <RequestModal/> */}
        <S.ButtonWrapper>
          <button onClick={(e) =>{e.preventDefault(); router.push({pathname:"/study/rule", query:{param: studyId }})}}>미션 만들기</button>
          <button onClick={(e) =>{e.preventDefault(); router.push({pathname:"/study/manage", query:{name:data.data.name, id:studyId, about:data.data.about, capacity: data.data.capacity }})}}>스터디 수정하기</button>
        </S.ButtonWrapper>
      </S.StudyInfoContainer>
    </S.Container>
  );
};

export default StudyInfo;
