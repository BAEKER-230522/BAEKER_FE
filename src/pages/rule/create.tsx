/* eslint-disable rule-name */
import { S } from "../study/style";
import Input from "@/components/common/Input";
import useInput from "@/hooks/useInput";
import RadioButtonGroup from "@/components/rule/radioButtonGroup";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ruleApi } from "@/api/ruleApi";
import { toast } from "react-toastify";
const CreateStudy = () => {
  const [nameValue, setNameValue, nameHandler] = useInput('')  
  const [aboutValue, setAboutValue, aboutHandler] = useInput('')
  const [xpValue, setXpValue, xpHandler] = useInput('')
  const [countValue, setCountValue, countHandler] = useInput('')
  const [levelValue, setLevelValue] = useState('')
  const [createRule] = ruleApi.useCreateRuleMutation()
  const [modifyRule] = ruleApi.useUpdateRuleMutation()
  const router = useRouter();
  const isEditMode = Object.keys(router.query).length !== 0 ? true : false;
  
  // Object.keys(router.query).length !== 0 경우는 rule 수정하는 상태이다.
  useEffect(() => {
    if(isEditMode){
      setNameValue(String(router.query?.name!));
      setAboutValue(String(router.query?.about!));
      setXpValue(String(router.query?.xp!));
      setCountValue(String(router.query?.count))
      setLevelValue(String(router.query.level))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [])

  const handleCreateStudy = (e:any) => {
    
    e.preventDefault(); 
    if(isEditMode){
      modifyRule({id:router.query.id, body:{"name":nameValue, "about":aboutValue, "xp":xpValue, "count":countValue, "provider":"BaekJoon", "difficulty":levelValue}})
      toast('규칙 수정 완료')
    }else{
      createRule({"name":nameValue, "about":aboutValue, "xp":xpValue, "count":countValue, "provider":"BaekJoon", "difficulty":levelValue})
      toast('규칙 생성 완료')
    }
    router.push({pathname:"/rule/list"})
}
  return (
    <S.Container>
      <S.FormContainer onSubmit={(e) => handleCreateStudy(e)}>
        <Input title={"규칙 명"} size={"40%"} value={nameValue} onChange={nameHandler}/>
        <Input title={"규칙 소개"} size={"40%"} value={aboutValue} onChange={aboutHandler}/>
        <Input title={"경험치"} size={"40%"} value={xpValue} onChange={xpHandler}/>
        <Input title={"문제 풀이 수"} size={"40%"} value={countValue} onChange={countHandler}/>
        <RadioButtonGroup setLevelValue={setLevelValue}/>
        {isEditMode ? <S.Button type="submit" value={'규칙 수정'}/> : <S.Button type="submit" value={'규칙 생성'}/>}
      </S.FormContainer>
    </S.Container>
  );
};

export default CreateStudy;
