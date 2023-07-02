import { IMG_URL } from "@/pages/mock";
import { S } from "./style";
import { studyApi } from "@/api/studyApi";
import { useRouter } from "next/router";

const StudyInfo = () => {
  const router = useRouter();
  const {detail: param} = router.query;
  const {data, isLoading} = studyApi.useGetStudyInfoQuery(param)
  console.log(data)
  
  if(isLoading) return <div>Loading...</div>
  return (
    <S.Container>
      <S.Img src={IMG_URL} />
      <S.StudyInfoContainer>
        <div>{data.data.name}</div>
        <p style={{color:'white'}}>{data.data.about}</p>
        {/* <button>가입하기</button> */}
        <button>규칙 만들기</button>
        <button onClick={(e) =>{e.preventDefault(); router.push({pathname:"/study/create", query:{name:data.data.name, id:param, about:data.data.about, capacity: data.data.capacity }})}}>스터디 수정하기</button>
      </S.StudyInfoContainer>
    </S.Container>
  );
};

export default StudyInfo;
