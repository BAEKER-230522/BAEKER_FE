
import { studyApi } from "@/api/studyApi";
import { S } from "./style";
import Input from "@/components/common/Input";
import useInput from "@/hooks/useInput";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from 'react-toastify'
import { ruleApi } from "@/api/ruleApi";
import Selector from "@/components/common/Selector";
export interface ISelectOption{
  value: string;
  id: number;
}

const Mission = () => {
  
  const [nameValue, setNameValue, nameHandler] = useInput('')  
  const [aboutValue, setAboutValue, aboutHandler] = useInput('')
  const [memberCount, setMemberCount] = useState<number>(1);
  const router = useRouter();
  const {param} = router.query
  const isEditMode = Object.keys(router.query).length > 1 ? true : false;
  const {data, isLoading} = ruleApi.useGetAllRulesQuery({});
  const [ruleId, setRuleId] = useState<number>();
  console.log(data);
  const [createMission] = studyApi.useCreateStudyMissionMutation()
  const [updateMission] = studyApi.useUpdateStudyMissionMutation()
  
  const handleCreateMission = async() => {
    try{
      await createMission(
        {
          "name": nameValue,
          "about": aboutValue,
          "studyId": param,
          "ruleId": ruleId
        }
      )
      toast('미션 등록 완료')
      router.push({pathname:'/profile'})
    }catch(err){
      console.log(err);
      
    }
  }


  const handleUpdateStudy = async() => {
    try{
      await updateMission({id: Number(router.query.id), body:{"name":nameValue, "about":aboutValue, "ruleId":11}})
      toast('미션 수정 완료')
      router.push({pathname:'/profile'})
    }catch(err){
      console.log(err)
    }
  }

  const handleSubmit = (e:any) => {
    if(isEditMode){
      handleUpdateStudy()
    }else{
      handleCreateMission()
    }
    e.preventDefault(); 
  }

  useEffect(() => {
    setNameValue(router.query.name)
    setAboutValue(router.query.about)
  }, [])

  if(isLoading) return <div>Loading...</div>
  return (
    <S.Container >
      <S.FormContainer onSubmit={(e) => handleSubmit(e)}>
        <S.SelectorWrapper>
          <S.Title style={{marginRight: 'auto'}}>미션 선택</S.Title>
          <Selector data={data} setStudyId={setRuleId}/>
        </S.SelectorWrapper>
        <Input title={"미션 이름"} size={"40%"} value={nameValue} onChange={nameHandler}/>
        <Input title={"미션 소개"} size={"40%"} value={aboutValue} onChange={aboutHandler}/>
        {isEditMode ? <S.Button type="submit" value={'수정'}/> : <S.Button type="submit" value={'미션 생성'}/>}
      </S.FormContainer>
    </S.Container>
  );
};

export default Mission;
