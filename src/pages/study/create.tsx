import { studyApi } from "@/api/studyApi";
import { S } from "./style";
import Input from "@/components/common/Input";
import Slider from "@/components/slider/slider";
import useInput from "@/hooks/useInput";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const CreateStudy = () => {
  const [nameValue, setNameValue, nameHandler] = useInput('')  
  const [aboutValue, setAboutValue, aboutHandler] = useInput('')
  const [memberCount, setMemberCount] = useState<number>(1);
  const router = useRouter();
  const isEditMode = Object.keys(router.query).length !== 0 ? true : false;
  const [createStudy] = studyApi.useCreateStudyMutation();
  const [updateStudy] = studyApi.useUpdateStudyMutation();

  useEffect(() => {
    setNameValue(router.query.name)
    setAboutValue(router.query.about)
    setMemberCount(router.query.capacity)
  }, [])
  

  const handleSubmit = (e:any) => {
    e.preventDefault(); 
    if(isEditMode){
      updateStudy({"id": router.query.id, "name":nameValue, "about":aboutValue,"capacity":memberCount})
      router.push({pathname:`${router.query.id}`})
    }else{
      createStudy({"member":1, "name":nameValue, "about":aboutValue, "leader":"leader","capacity":memberCount})
      router.push({pathname:"/profile"})
    }
  }
  return (
    <S.Container onSubmit={(e) => handleSubmit(e)}>
      <Input title={"스터디 이름"} size={"40%"} value={nameValue} onChange={nameHandler}/>
      <Input title={"스터디 소개"} size={"40%"} value={aboutValue} onChange={aboutHandler}/>
      <Slider memberCount={memberCount} setMemberCount={setMemberCount}/>
      {isEditMode ? <S.Button type="submit" value={'스터디 수정'}/> : <S.Button type="submit" value={'스터디 생성'}/>}
    </S.Container>
  );
};

export default CreateStudy;
