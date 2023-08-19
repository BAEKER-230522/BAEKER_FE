import { S } from "./style";
import Input from "@/components/common/Input";
import Slider from "@/components/slider/slider";
import useInput from "@/hooks/useInput";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useStudyEdit from "@/hooks/useStudyEdit";
import { GetServerSideProps } from "next";
import { parseCookies } from "@/util/parseCookie";
import useFetchUserData from "@/hooks/queries/useFetchUserData";

interface IParsedCookies {
  refreshToken?: string;
  memberId?: string;
};


export const getServerSideProps : GetServerSideProps = async(context) => {
  const {req, res} = context;
  const cookies:IParsedCookies = parseCookies(req.headers.cookie)
  const userId = Number(cookies.memberId)
  
  return {
    props: {
      userId,
    },
  };
}


const CreateStudy = ({userId}:{userId:number}) => {
  const {maxStudyCapacity, setMaxStudyCapacity, handleCreateStudy, handleUpdateStudy} = useStudyEdit();
  const [nameValue, setNameValue, nameHandler] = useInput('')  
  const [aboutValue, setAboutValue, aboutHandler] = useInput('')
  const router = useRouter();
  const isEditMode = Object.keys(router.query).length !== 0 ? true : false;
  const {data: userData, isLoading:isUserDataLoading} = useFetchUserData(userId);
  useEffect(() => {
    if(isEditMode){
      setNameValue(String(router.query.name))
      setAboutValue(String(router.query.about))
      setMaxStudyCapacity(Number(router.query.capacity))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(isUserDataLoading) return <div>Loading..</div>
  
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(isEditMode){
      handleUpdateStudy({nameValue, aboutValue})
    }else{
      handleCreateStudy({nameValue, aboutValue, userId, nickname: userData.data.nickname})
    }
  }

  return (
    <S.Container>
      <S.FormContainer onSubmit={(e) => handleSubmit(e)}>
        <Input title={"스터디 이름"} size={"40%"} value={nameValue} onChange={nameHandler}/>
        <Input title={"스터디 소개"} size={"40%"} value={aboutValue} onChange={aboutHandler}/>
        <Slider maxStudyCapacity={maxStudyCapacity} setMaxStudyCapacity={setMaxStudyCapacity}/>
        {isEditMode ? <S.Button type="submit" value={'스터디 수정'}/> : <S.Button type="submit" value={'스터디 생성'}/>}
      </S.FormContainer>
    </S.Container>
  );
};

export default CreateStudy;