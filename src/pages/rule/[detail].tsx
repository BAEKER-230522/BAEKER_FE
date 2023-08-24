import { useRouter } from "next/router";
import styled from "styled-components";
import { ruleApi } from "@/api/ruleApi";
import AlertModal from "@/components/common/modal/AlertModal";
import Loading from "@/components/common/loading/Loading";

interface RuleData {
  data: {
    name: string;
    count: number;
    difficulty: string;
    xp: number;
    about: string;
  };
}

const RuleDetail = () => {
  const router = useRouter()
  const {detail : param} = router.query
  const {data, isLoading} = ruleApi.useGetRuleQuery(param) as {data: RuleData; isLoading: boolean};
  
  if(isLoading) return (
    <S.Container>
      <S.Wrapper>
        <Loading/>
      </S.Wrapper>
      <S.ButtonContainer>
        <S.Button onClick={() => router.push({pathname:"/rule/list"})}>목록</S.Button>
        <AlertModal id={Number(param)} title={'규칙 삭제'} text={'삭제하시겠습니까 ?'} type={"rule"}>삭제</AlertModal>
        <S.Button onClick={() => router.push({pathname:"/rule/create", query:{name: data!.data.name, count: data!.data.count, level: data!.data.difficulty, xp: data!.data.xp, about: data!.data.about, id:param}})}>수정</S.Button>
      </S.ButtonContainer>
    </S.Container>
  )
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.Title>규칙 명</S.Title>
          <S.Content>{data.data.name}</S.Content>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.Title>규칙 소개</S.Title>
          <S.Content>{data.data.about}</S.Content>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.Title>문제풀이 수</S.Title>
          <S.Content>{data.data.count}</S.Content>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.Title>난이도</S.Title>
          <S.Content>{data.data.difficulty}</S.Content>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.Title>획득 경험치</S.Title>
          <S.Content>{data.data.xp}</S.Content>
        </S.ContentWrapper>
        
      </S.Wrapper>
      <S.ButtonContainer>
        <S.Button onClick={() => router.push({pathname:"/rule/list"})}>목록</S.Button>
        <AlertModal id={Number(param)} title={'규칙 삭제'} text={'삭제하시겠습니까 ?'} type={"rule"}>삭제</AlertModal>
        <S.Button onClick={() => router.push({pathname:"/rule/create", query:{name: data.data.name, count: data.data.count, level: data.data.difficulty, xp: data.data.xp, about: data.data.about, id:param}})}>수정</S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default RuleDetail;

const Container = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #2a303c;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  width: 30%;
  height: 60%;
  background-color: white;
  border-radius: 10px;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  color: #a6adbb;
`;

const Content = styled.span`
  font-size: 1.2rem;
  color: #2a303c;
  margin-top: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 33%;
  justify-content: space-around;
  height: 40px;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 31%;
  height: 40px;
  border-radius: 5px;
  background-color: #661ae6;
  color: white;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;

const S = { Container, Wrapper, Title, Content, ContentWrapper, ButtonContainer, Button };
