import { studyApi } from "@/api/studyApi";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useState } from "react";

interface IArgument {
  nameValue : string;
  aboutValue : string;
  param : string | undefined | string[];
}

const useMissionEdit = () => {

  const router = useRouter()
  const [ruleId, setRuleId] = useState<number>();
  const [createMission] = studyApi.useCreateStudyMissionMutation()
  const [updateMission] = studyApi.useUpdateStudyMissionMutation()

  const handleCreateMission = async({nameValue, aboutValue, param} : IArgument) => {
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
      router.push({pathname:`/study/${param}`})
    }catch(err){
      console.log(err);
    }
  }

  const handleUpdateStudy = async({nameValue, aboutValue, router} : any) => {
    console.log(router.query);
    try{
      await updateMission({id: Number(router.query.id), body:{"name":nameValue, "about":aboutValue, "ruleId":ruleId}})
      toast('미션 수정 완료')
      router.push({pathname:`/study/${router.query.id}`})
    }catch(err){
      console.log(err)
    }
  }

  return {handleCreateMission, handleUpdateStudy, setRuleId}
}

export default useMissionEdit