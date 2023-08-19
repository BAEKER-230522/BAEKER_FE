import styled from "styled-components";
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


const Modify = ({memberId, refreshToken}:LoginProps) => {
  const {data, isLoading} = memberApi.useGetMemberQuery(memberId);
  const [nameValue, setNameValue, onChangeName] = useInput('')  
  const [aboutValue, setAboutValue, onChangeAbout] = useInput('')
  const {handleUpdateUserInfo} = useUpdateUserInfo(memberId);
  const router = useRouter();
  
  useEffect(() => {
    if(isLoading === false){
      setNameValue(data.data.nickname)
      setAboutValue(data.data.about)
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  const onSubmitUpdateUserInfo = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpdateUserInfo({nameValue, aboutValue})
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
      <ModifyButton />
    </S.Container>
  );
};

export default Modify;

const Container = styled.form`
  width: 100vw;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #2a303c;
  padding-bottom: 50px;
`;

const S = { Container };
