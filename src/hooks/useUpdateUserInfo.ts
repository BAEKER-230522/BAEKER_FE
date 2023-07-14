import { memberApi } from "@/api/memberApi";
import { toast } from "react-toastify";
import { USER_NUMBER } from "@/util/constant";

interface IArgument {
  nameValue: string;
  aboutValue : string;
}

const useUpdateUserInfo = () => {
  const [updateUserInfo] = memberApi.useUpdateMemberMutation();

  const handleUpdateUserInfo = async({nameValue, aboutValue}:IArgument) => {
    try{
      await updateUserInfo({"id":USER_NUMBER, "nickname":nameValue, "about":aboutValue})
      toast('정보 수정 완료')
    }catch(err){
      console.log(err); 
    }
  }

  return {handleUpdateUserInfo}
}

export default useUpdateUserInfo