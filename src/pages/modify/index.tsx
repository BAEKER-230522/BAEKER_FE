import styled from "styled-components";
import { themedPalette } from "@/styles/theme";
import ModifyImg from "@/components/modify/img";
import Input from "@/components/common/input";
import ModifyButton from "@/components/modify/button";
import { memberApi } from "@/api/memberApi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useInput from "@/hooks/useInput";
import useUpdateUserInfo from "@/hooks/profile/useUpdateUserInfo";
import Loading from "@/components/common/loading/Loading";
import { PageContainer } from "@/styles/common.style";
import LocalStorage from "@/util/localstorage";

const Modify = () => {
  const memberId = Number(LocalStorage.getItem("memberId"));
  const { data, isLoading } = memberApi.useGetMemberQuery(memberId);
  const [nameValue, setNameValue, onChangeName] = useInput("");
  const [aboutValue, setAboutValue, onChangeAbout] = useInput("");
  const [img, setImg] = useState(data.data.profileImg);
  const [imgFile, setImgFile] = useState<File | undefined>(undefined);
  const { handleUpdateUserInfo } = useUpdateUserInfo(memberId);
  const router = useRouter();
  useEffect(() => {
    if (isLoading === false) {
      setNameValue(data.data.nickname);
      setAboutValue(data.data.about);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const onSubmitUpdateUserInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpdateUserInfo({ nameValue, aboutValue, imgFile });
    router.push({ pathname: "/profile" });
  };

  if (isLoading)
    return (
      <S.Container>
        <S.FormContainer onSubmit={(e) => onSubmitUpdateUserInfo(e)}>
          <Loading />
          <ModifyButton />
        </S.FormContainer>
      </S.Container>
    );

  return (
    <S.Container>
      <S.FormContainer onSubmit={(e) => onSubmitUpdateUserInfo(e)}>
        <ModifyImg img={img} setImg={setImg} setImgFile={setImgFile} />
        <Input title={"이름"} size={"25%"} value={nameValue} onChange={onChangeName} />
        <Input title={"자기소개"} size={"25%"} value={aboutValue} onChange={onChangeAbout} />
        <ModifyButton />
      </S.FormContainer>
    </S.Container>
  );
};

export default Modify;

const Container = styled(PageContainer)``;

export const FormContainer = styled.form`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${themedPalette.borderRadius};
  background-color: ${themedPalette.bg_element2};
  padding: 30px;
  margin: 20px;
`;

const S = { Container, FormContainer };
