import { IMG_URL } from "@/pages/mock";
import { S } from "./style";
import { studyApi } from "@/api/studyApi";
import { useRouter } from "next/router";

const StudyInfo = () => {
  const router = useRouter();
  const {detail: param} = router.query;
  const {data, isLoading} = studyApi.useGetStudyInfoQuery(param)
  
  if(isLoading) return <div>Loading...</div>
  return (
    <S.Container>
      <S.Img src={IMG_URL} />
      <S.StudyInfoContainer>
        <S.Title>{data.data.name}</S.Title>
        <S.About style={{color:'white'}}>{data.data.about}</S.About>
        {/* <button>가입하기</button> */}
        <S.ButtonWrapper>
          <button onClick={(e) =>{e.preventDefault(); router.push({pathname:"/study/rule", query:{param: param }})}}>규칙 만들기</button>
          <button onClick={(e) =>{e.preventDefault(); router.push({pathname:"/study/create", query:{name:data.data.name, id:param, about:data.data.about, capacity: data.data.capacity }})}}>스터디 수정하기</button>
        </S.ButtonWrapper>
      </S.StudyInfoContainer>
    </S.Container>
  );
};

export default StudyInfo;
