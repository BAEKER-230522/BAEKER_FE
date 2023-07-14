import { studyApi } from "@/api/studyApi";
import { useState } from "react";
import { USER_NUMBER } from "@/util/constant";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface IArgument {
  nameValue : string;
  aboutValue : string;
}

interface ISubmit {
  e : React.FormEvent<HTMLFormElement>;
  isEditMode : boolean;
}

const useStudyEdit = () => {
  const router = useRouter();
  const [maxStudyCapacity, setMaxStudyCapacity] = useState<number>(1);
  const [createStudy] = studyApi.useCreateStudyMutation();
  const [updateStudy] = studyApi.useUpdateStudyMutation();

  const handleCreateStudy = async({nameValue, aboutValue}: IArgument) => {
    try{
      await createStudy({"member":USER_NUMBER, "name":nameValue, "about":aboutValue, "leader":"leader","capacity":maxStudyCapacity});
      toast('스터디 생성 완료')
      router.push({pathname:"/profile"})
    }catch(err){
      console.log(err)
    }
  }
  
  const handleUpdateStudy = async({nameValue, aboutValue}: IArgument) => {
    try{
      await updateStudy({"id": router.query.id, "name":nameValue, "about":aboutValue,"capacity":maxStudyCapacity})
      toast('스터디 수정 완료')
      router.push({pathname:`${router.query.id}`})
    }catch(err){
      console.log(err)
    }
  }

  return {maxStudyCapacity, setMaxStudyCapacity, handleCreateStudy, handleUpdateStudy}
}

export default useStudyEdit