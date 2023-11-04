import { useEffect } from "react";
import { useRouter } from "next/router";
import { themedPalette } from "@/styles/theme";
import { PageContainer } from "@/styles/common.style";
import { toast } from "react-toastify";
import styled from "styled-components";
import Input from "@/components/common/input";
import Slider from "@/components/common/slider/slider";
import useInput from "@/hooks/useInput";
import useStudyEdit from "@/hooks/study/useStudyEdit";
import LocalStorage from "@/util/localstorage";
import { memberApi } from "@/api/memberApi";
import Loading from "@/components/common/loading/Loading";

const CreateStudy = () => {
  const userId = Number(LocalStorage.getItem("memberId"));

  const { maxStudyCapacity, setMaxStudyCapacity, handleCreateStudy, handleUpdateStudy } = useStudyEdit();
  const [nameValue, setNameValue, nameHandler] = useInput("");
  const [aboutValue, setAboutValue, aboutHandler] = useInput("");
  const router = useRouter();
  const isEditMode = Object.keys(router.query).length !== 0 ? true : false;
  const { data: userData, isLoading: isUserDataLoading } = memberApi.useGetMemberQuery(userId);

  useEffect(() => {
    if (isEditMode) {
      setNameValue(String(router.query.name));
      setAboutValue(String(router.query.about));
      setMaxStudyCapacity(Number(router.query.capacity));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isUserDataLoading) {
    <S.Container>
      <S.FormContainer onSubmit={(e) => handleSubmit(e)}>
        <Loading />
      </S.FormContainer>
    </S.Container>;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameValue === "") return toast("스터디 이름을 설정해주세요.");
    if (isEditMode) {
      handleUpdateStudy({ nameValue, aboutValue });
    } else {
      handleCreateStudy({
        nameValue,
        aboutValue,
        userId,
        nickname: userData.data.nickname,
      });
    }
  };

  return (
    <S.Container>
      <S.FormContainer onSubmit={(e) => handleSubmit(e)}>
        <Input title={"스터디 이름"} size={"40%"} value={nameValue} onChange={nameHandler} />
        <Input title={"스터디 소개"} size={"40%"} value={aboutValue} onChange={aboutHandler} />
        <Slider maxStudyCapacity={maxStudyCapacity} setMaxStudyCapacity={setMaxStudyCapacity} />
        {isEditMode ? (
          <S.Button type="submit" value={"스터디 수정"} />
        ) : (
          <S.Button type="submit" value={"스터디 생성"} />
        )}
      </S.FormContainer>
    </S.Container>
  );
};

export default CreateStudy;

const Container = styled(PageContainer)`
  height: 95vh;
`;

const FormContainer = styled.form`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${themedPalette.borderRadius};
  background-color: ${themedPalette.bg_element2};
`;

const Button = styled.input`
  width: 30%;
  height: 50px;
  border-radius: 10px;
  background-color: ${themedPalette.bg_element4};
  color: ${themedPalette.text2};
  font-weight: 500;
  cursor: pointer;
  border: none;
  margin-top: 50px;
`;

const S = { Container, FormContainer, Button };
