import { memberApi } from "@/api/memberApi";
import axios from "axios";
import { toast } from "react-toastify";

interface IArgument {
  nameValue: string;
  aboutValue : string;
  img: string;
}

const useUpdateUserInfo = (userId:number) => {
  const [updateUserInfo] = memberApi.useUpdateMemberMutation();
  

  const updateImg = async(img:File) => {
    const formData = new FormData();
    formData.append('img', img);
  
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}api/member/v1/profile-img/${userId}`,
      formData,
    )
  }

  const handleUpdateUserInfo = async({nameValue, aboutValue, img}:IArgument) => {
    const formData = new FormData();
    formData.append("dto", JSON.stringify({"id":userId, "nickname":nameValue, "about":aboutValue}))
    formData.append("img", img)
    console.log(formData);
    try{
      await updateUserInfo(formData)
      toast('정보 등록 완료')
    }catch(err){
      console.log(err); 
    }
  }

  return {handleUpdateUserInfo, updateImg}
}

export default useUpdateUserInfo