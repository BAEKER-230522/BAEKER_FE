import { S } from "./style";
import { toast } from 'react-toastify'
import ModifyImg from "@/components/Modify/Img";
import Input from "@/components/common/Input";
import ModifyButton from "@/components/Modify/Button";
import { memberApi } from "@/api/memberApi";
import {  useEffect } from "react";
import {  useRouter } from "next/router";
import useInput from "@/hooks/useInput";


export interface IUserInfo {
  nickname: string;
  about : string;
}

const Modify = () => {
  const {data, isLoading} = memberApi.useGetMemberQuery(1);
  const [updateUserInfo, {isLoading: isUpdating}] = memberApi.useUpdateMemberMutation();
  const [nameValue, setNameValue, nameHandler] = useInput('')  
  const [aboutValue, setAboutValue, aboutHandler] = useInput('')
  const router = useRouter();
  
  useEffect(() => {
    if(isLoading === false){
      setNameValue(data.data.nickname)
      setAboutValue(data.data.about)
    } 
  }, [isLoading])

  const handleUpdateUserInfo = async() => {
    try{
      await updateUserInfo({"id":1, "nickname":nameValue, "about":aboutValue})
      toast('정보 수정 완료')
    }catch(err){
      console.log(err);
      
    }
    
  }
  
  if(isLoading) return <div>Loading...</div>
  return (
    <S.Container onSubmit={(e) => {
      e.preventDefault();
      handleUpdateUserInfo()
      router.push({pathname:"/profile"})
    }}>
      <ModifyImg />
      <Input title={"이름"} size={"25%"} value={nameValue} onChange={nameHandler} />
      <Input title={"자기소개"} size={"25%"} value={aboutValue} onChange={aboutHandler}/>
      <ModifyButton />
    </S.Container>
  );
};

export default Modify;
