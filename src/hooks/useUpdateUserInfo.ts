import { memberApi } from "@/api/memberApi";
import { toast } from "react-toastify";

interface IArgument {
  nameValue: string;
  aboutValue : string;
  img: string;
}

const useUpdateUserInfo = (userId:number) => {
  const [updateUserInfo] = memberApi.useUpdateMemberMutation();

  const handleUpdateUserInfo = async({nameValue, aboutValue, img}:IArgument) => {
    try{
      await updateUserInfo({"dto":{"id":userId, "nickname":nameValue, "about":aboutValue}, "img":img})
      toast('정보 등록 완료')
    }catch(err){
      console.log(err); 
    }
  }

  return {handleUpdateUserInfo}
}

export default useUpdateUserInfo