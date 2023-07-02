import { S } from "../study/style";
import Input from "@/components/common/Input";
import Slider from "@/components/slider/slider";
import useInput from "@/hooks/useInput";
import RadioButtonGroup from "@/components/rule/radioButtonGroup";
import { useState } from "react";
import { useRouter } from "next/router";
import { ruleApi } from "@/api/ruleApi";
const CreateStudy = () => {
  const [nameValue, setNameValue, nameHandler] = useInput('')  
  const [aboutValue, setAboutValue, aboutHandler] = useInput('')
  const [xpValue, setXpValue, xpHandler] = useInput('')
  const [countValue, setCountValue, countHandler] = useInput('')
  const [levelValue, setLevelValue] = useState('')
  const [createRule, {isLoading}] = ruleApi.useCreateRuleMutation()
  const router = useRouter();
  

  const handleCreateStudy = (e:any) => {
    e.preventDefault(); 
    createRule({"name":nameValue, "about":aboutValue, "xp":xpValue, "count":countValue, "provide":"BaekJoon", "difficulty":levelValue})
    router.push({pathname:"/rule/list"})
}
  return (
    <S.Container onSubmit={(e) => handleCreateStudy(e)}>
      <Input title={"규칙 명"} size={"40%"} value={nameValue} onChange={nameHandler}/>
      <Input title={"규칙 소개"} size={"40%"} value={aboutValue} onChange={aboutHandler}/>
      <Input title={"경험치"} size={"40%"} value={xpValue} onChange={xpHandler}/>
      <Input title={"문제 풀이 수"} size={"40%"} value={countValue} onChange={countHandler}/>
      <RadioButtonGroup setLevelValue={setLevelValue}/>
      <S.Button type="submit" value={'스터디 생성'}/>
    </S.Container>
  );
};

export default CreateStudy;
