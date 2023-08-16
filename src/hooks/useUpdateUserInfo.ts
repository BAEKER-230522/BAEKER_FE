import { memberApi } from "@/api/memberApi";
import { toast } from "react-toastify";

interface IArgument {
  nameValue: string;
  aboutValue : string;
}

const useUpdateUserInfo = (userId:number) => {
  const [updateUserInfo] = memberApi.useUpdateMemberMutation();

  const handleUpdateUserInfo = async({nameValue, aboutValue}:IArgument) => {
    try{
      await updateUserInfo({"id":userId, "nickname":nameValue, "about":aboutValue})
      toast('정보 등록 완료')
    }catch(err){
      console.log(err); 
    }
  }

  return {handleUpdateUserInfo}
}

export default useUpdateUserInfo