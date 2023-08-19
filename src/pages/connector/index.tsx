import { S } from "./style";
import ModifyImg from "@/components/modify/Img";
import Input from "@/components/common/Input";
import ModifyButton from "@/components/modify/button";
import { memberApi } from "@/api/memberApi";
import {  useEffect } from "react";
import {  useRouter } from "next/router";
import useInput from "@/hooks/useInput";
import useUpdateUserInfo from "@/hooks/useUpdateUserInfo";
import Loading from "@/components/Loading/Loading";
import { parseCookies } from "@/util/parseCookie";
import { GetServerSideProps } from "next";
import LocalStorage from "@/util/localstorage";
// deploy test
interface LoginProps {
  refreshToken: string;
  memberId: number;
}

interface IParsedCookies {
  refreshToken?:string;
  memberId?: string;
};

export const getServerSideProps : GetServerSideProps = async(context) => {
  const {req, res} = context;
  const cookies:IParsedCookies = parseCookies(req.headers.cookie)
  const refreshToken = cookies.refreshToken
  const memberId = Number(cookies.memberId)
  
  return {
    props: {
      refreshToken,
      memberId,
    },
  };
}


const Connector = ({memberId, refreshToken}:LoginProps) => {
  
  const {data, isLoading} = memberApi.useGetMemberQuery(memberId);
  const [nameValue, setNameValue, onChangeName] = useInput('')  
  const [aboutValue, setAboutValue, onChangeAbout] = useInput('')
  const [baekjoonIdValue, setBaekjoonIdValue, onChangebaekjoonId] = useInput('')
  const {handleUpdateUserInfo} = useUpdateUserInfo(memberId);
  const [connectBaekJoon] = memberApi.useConnectBaekjoonMutation();
  const router = useRouter();
  useEffect(() => {
    if(isLoading === false){
      setNameValue(data.data.nickname)
      setAboutValue(data.data.about)
    } 
  }, [isLoading])

  useEffect(() => {
    LocalStorage.setItem('refreshToken', refreshToken)
    LocalStorage.setItem('memberId', String(memberId))
  }, [])

  const onSubmitUpdateUserInfo = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpdateUserInfo({nameValue, aboutValue})
    connectBaekJoon({memberId, baekjoonId:baekjoonIdValue})
    router.push({pathname:"/profile"})
  }
  
  if(isLoading) return (
    <S.Container onSubmit={(e) => onSubmitUpdateUserInfo(e)}>
      <Loading/>
      <ModifyButton />
    </S.Container>
  )

  return (
    <S.Container onSubmit={(e) => onSubmitUpdateUserInfo(e)}>
      <ModifyImg userImg={data.data.kakaoProfileImage}/>
      <Input title={"이름"} size={"25%"} value={nameValue} onChange={onChangeName} />
      <Input title={"자기소개"} size={"25%"} value={aboutValue} onChange={onChangeAbout}/>
      <Input title={"백준 연동 ID"} size={"25%"} value={baekjoonIdValue} onChange={onChangebaekjoonId}/>
      <ModifyButton />
    </S.Container>
  );
};

export default Connector;