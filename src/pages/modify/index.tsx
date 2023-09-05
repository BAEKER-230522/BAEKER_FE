import styled from "styled-components";
import { themedPalette } from "@/styles/theme";
import ModifyImg from "@/components/modify/Img";
import Input from "@/components/common/input";
import ModifyButton from "@/components/modify/button";
import { memberApi } from "@/api/memberApi";
import {  useEffect, useState } from "react";
import {  useRouter } from "next/router";
import useInput from "@/hooks/useInput";
import useUpdateUserInfo from "@/hooks/useUpdateUserInfo";
import Loading from "@/components/common/loading/Loading";
import { parseCookies } from "@/util/parseCookie";
import { GetServerSideProps } from "next";
import { PageContainer } from "@/styles/common.style";

interface LoginProps {
  refreshToken: string;
  memberId: number;
}

interface IParsedCookies {
  refreshToken?:string;
  memberId?: string;
};


export const getServerSideProps : GetServerSideProps = async(context) => {
  const {req} = context;
  const cookies:IParsedCookies = parseCookies(req.headers.cookie)
  const memberId = Number(cookies.memberId)
  
  return {
    props: {
      memberId,
    },
  };
}


const Modify = ({memberId}:LoginProps) => {
  const {data, isLoading} = memberApi.useGetMemberQuery(memberId);
  const [nameValue, setNameValue, onChangeName] = useInput('')  
  const [aboutValue, setAboutValue, onChangeAbout] = useInput('')
  const [img, setImg] = useState(data.data.profileImg)
  const {handleUpdateUserInfo, updateImg} = useUpdateUserInfo(memberId);
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
    updateImg(img)
    handleUpdateUserInfo({nameValue, aboutValue, img})
    router.push({pathname:"/profile"})
  }
  
  if(isLoading) return (
    <S.Container>
      <S.FormContainer onSubmit={(e) => onSubmitUpdateUserInfo(e)}>
        <Loading/>
        <ModifyButton />
      </S.FormContainer>
    </S.Container>
  )

  return (
    <S.Container >
      <S.FormContainer onSubmit={(e) => onSubmitUpdateUserInfo(e)}>
        <ModifyImg img={img} setImg={setImg}/>
        <Input title={"이름"} size={"25%"} value={nameValue} onChange={onChangeName} />
        <Input title={"자기소개"} size={"25%"} value={aboutValue} onChange={onChangeAbout}/>
        <ModifyButton />
      </S.FormContainer>
    </S.Container>
  );
};

export default Modify;

const Container = styled(PageContainer)`
`;

export const FormContainer = styled.form`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${themedPalette.borderRadius};
  background-color:  ${themedPalette.bg_element2};
`

const S = { Container, FormContainer };
