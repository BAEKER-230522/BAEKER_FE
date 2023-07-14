import { S } from "./style";
import Input from "@/components/common/Input";
import useInput from "@/hooks/useInput";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ruleApi } from "@/api/ruleApi";
import Selector from "@/components/common/Selector";
import useMissionEdit from "@/hooks/useMissionEdit";

const Mission = () => {
  const router = useRouter();
  const {param} = router.query
  const isEditMode = Object.keys(router.query).length > 1 ? true : false;
  const {handleCreateMission, handleUpdateStudy, setRuleId} = useMissionEdit()
  const [nameValue, setNameValue, nameHandler] = useInput('')
  const [aboutValue, setAboutValue, aboutHandler] = useInput('')
  const {data, isLoading} = ruleApi.useGetAllRulesQuery({});
  
  useEffect(() => {
    setNameValue(router.query.name)
    setAboutValue(router.query.about)
  }, [])

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if(isEditMode){
      handleUpdateStudy({nameValue, aboutValue, router})
    }else{
      handleCreateMission({nameValue, aboutValue, param})
    }
  }

  if(isLoading) return <div>Loading...</div>

  return (
    <S.Container >
      <S.FormContainer onSubmit={(e) => handleSubmit(e)}>
        <S.SelectorWrapper>
          <S.Title style={{marginRight: 'auto'}}>미션 선택</S.Title>
          <Selector data={data} setId={setRuleId}/>
        </S.SelectorWrapper>
        <Input title={"미션 이름"} size={"40%"} value={nameValue} onChange={nameHandler}/>
        <Input title={"미션 소개"} size={"40%"} value={aboutValue} onChange={aboutHandler}/>
        {isEditMode ? <S.Button type="submit" value={'수정'}/> : <S.Button type="submit" value={'미션 생성'}/>}
      </S.FormContainer>
    </S.Container>
  );
};

export default Mission;
