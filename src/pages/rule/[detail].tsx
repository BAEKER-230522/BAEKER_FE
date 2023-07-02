import { useRouter } from "next/router";
import { S } from "./style";
import { ruleApi } from "@/api/ruleApi";
const RuleDetail = () => {
  const router = useRouter()
  const {detail : param} = router.query
  const {data, isLoading} = ruleApi.useGetRuleQuery(param)
  const [deleteRule, {isLoading:deleteLoading}] = ruleApi.useDeleteRuleMutation();
  if(isLoading) return <div>Loading...</div>
  console.log(data)
  const handleDelete = () => {
    deleteRule(param);
    router.push({pathname:"/rule/list"})
  }
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
        <S.Button>목록</S.Button>
        <S.Button onClick={handleDelete}>삭제</S.Button>
        <S.Button onClick={() => router.push({pathname:"/rule/create", query:{name: data.data.name, count: data.data.count, level: data.data.difficulty, xp: data.data.xp, about: data.data.about, id:param}})}>수정</S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default RuleDetail;
