
import { studyApi } from "@/api/studyApi";
import { S } from "./style";
import Input from "@/components/common/Input";
import Slider from "@/components/slider/slider";
import useInput from "@/hooks/useInput";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from 'react-toastify'
import { ruleApi } from "@/api/ruleApi";
import SelectBox from "@/components/study/selectBox";

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
  console.log(router.query);
  const isEditMode = Object.keys(router.query).length !== 0 ? true : false;
  const {data, isLoading} = ruleApi.useGetAllRulesQuery({});
  const [selectedOption, setSelectedOption] = useState<ISelectOption>({value: '', id:0});
  const [createMission] = ruleApi.useCreateRuleMutation()
  
  const handleCreateMission = async() => {
    try{
      await createMission(
        {
          "name": nameValue,
          "about": aboutValue,
          "studyId": param,
          "ruleId": selectedOption.id
        }
      )
      toast('미션 등록 완료')
      router.push({pathname:`${param}`})
    }catch(err){
      console.log(err);
      
    }
  }

  const handleSubmit = (e:any) => {
    handleCreateMission()
    e.preventDefault(); 
  }
  return (
    <S.Container onSubmit={(e) => handleSubmit(e)}>
      <SelectBox selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
      <Input title={"미션 이름"} size={"40%"} value={nameValue} onChange={nameHandler}/>
      <Input title={"미션 소개"} size={"40%"} value={aboutValue} onChange={aboutHandler}/>
      {isEditMode ? <S.Button type="submit" value={' 수정'}/> : <S.Button type="submit" value={'미션 생성'}/>}
    </S.Container>
  );
};

export default Mission;
