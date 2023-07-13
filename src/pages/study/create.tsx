import { studyApi } from "@/api/studyApi";
import { S } from "./style";
import Input from "@/components/common/Input";
import Slider from "@/components/Slider/Slider";
import useInput from "@/hooks/useInput";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from 'react-toastify'
import { USER_NUMBER } from "@/util/constant";


const CreateStudy = () => {
  const [nameValue, setNameValue, nameHandler] = useInput('')  
  const [aboutValue, setAboutValue, aboutHandler] = useInput('')
  const [memberCount, setMemberCount] = useState<string>('1');
  const router = useRouter();
  const isEditMode = Object.keys(router.query).length !== 0 ? true : false;

  const [createStudy, {isSuccess: isCreateStudySuccess}] = studyApi.useCreateStudyMutation();
  const [updateStudy, {isSuccess: isUpdateStudySuccess}] = studyApi.useUpdateStudyMutation();

  const handleCreateStudy = async() => {
    try{
      await createStudy({"member":USER_NUMBER, "name":nameValue, "about":aboutValue, "leader":"leader","capacity":memberCount});
      toast('스터디 생성 완료')
      router.push({pathname:"/profile"})
    }catch(err){
      console.log(err)
    }
  }
  
  const handleUpdateStudy = async() => {
    try{
      await updateStudy({"id": router.query.id, "name":nameValue, "about":aboutValue,"capacity":memberCount})
      toast('스터디 수정 완료')
      router.push({pathname:`${router.query.id}`})
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    if(isEditMode){
      setNameValue(router.query.name)
      setAboutValue(router.query.about)
      setMemberCount(router.query.capacity)
    }
  }, [])
  

  const handleSubmit = (e:any) => {
    e.preventDefault(); 
    if(isEditMode){
      handleUpdateStudy()
    }else{
      handleCreateStudy()
    }
  }
  return (
    <S.Container>
      <S.FormContainer onSubmit={(e) => handleSubmit(e)}>
        <Input title={"스터디 이름"} size={"40%"} value={nameValue} onChange={nameHandler}/>
        <Input title={"스터디 소개"} size={"40%"} value={aboutValue} onChange={aboutHandler}/>
        <Slider memberCount={memberCount} setMemberCount={setMemberCount}/>
        {isEditMode ? <S.Button type="submit" value={'스터디 수정'}/> : <S.Button type="submit" value={'스터디 생성'}/>}
      </S.FormContainer>
    </S.Container>
  );
};

export default CreateStudy;
