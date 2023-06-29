import { S } from "./modify.styled";
import ModifyImg from "@/components/modify/Img";
import Input from "@/components/common/Input";
import ModifyButton from "@/components/modify/button";
import { memberApi } from "@/api/memberApi";
import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";

export interface IUserInfo {
  nickname: string;
  about : string;
}

const Modify = () => {
  const {data, isLoading} = memberApi.useGetMemberQuery(1);
  const [updateUserInfo, {isLoading: isUpdating}] = memberApi.useUpdateMemberMutation();
  const [userInfo, setUserInfo] = useState<IUserInfo>({nickname:'', about: ''})
  const router = useRouter();
  
  
  useEffect(() => {
    console.log(data, '1');
    if(isLoading === false){
      console.log(data, '2');
      setUserInfo({nickname:data.data.nickname, about: data.data.about})
    } 
  }, [isLoading])

  
  if(isLoading) return <div>Loading...</div>
  return (
    <S.Container onSubmit={(e) => {
      e.preventDefault();
      updateUserInfo({"id":1, "nickname":userInfo.nickname, "about":userInfo.about})
      router.push({pathname:"/profile"})
    }}>
      <ModifyImg />
      <Input title={"이름"} size={"25%"} value={userInfo.nickname} userInfo={userInfo} setUserInfo={setUserInfo}/>
      <Input title={"자기소개"} size={"25%"} value={userInfo.about} userInfo={userInfo} setUserInfo={setUserInfo}/>
      <ModifyButton />
    </S.Container>
  );
};

export default Modify;
