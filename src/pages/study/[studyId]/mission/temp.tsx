import { useRouter } from "next/router";
import { S } from "../../../rule/style";
import AlertModal from "@/components/common/Modal/AlertModal";
import { Button } from 'antd';
import { studyApi } from "@/api/studyApi";
const RuleDetail = () => {
  const router = useRouter()
  const {detail: param} = router.query
  const {data:studyMission, isLoading:isStudyMissionLoading} = studyApi.useGetStudyMissionQuery(param)

  if(isStudyMissionLoading) return <div>Loading...</div>
  
  const onClickRuleDetail = () => {
    router.push({pathname:`/rule/${studyMission.data.ruleId}`})
  }
  
  return (
    <S.Container>
      <S.Wrapper style={{height:"40%"}}>
        <S.ContentWrapper>
          <S.Title>미션 명</S.Title>
          <S.Content>{studyMission.data.name}</S.Content>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.Title>미션 소개</S.Title>
          <S.Content>{studyMission.data.about}</S.Content>
        </S.ContentWrapper>
      </S.Wrapper>
      <S.ButtonContainer>
        <Button type="primary" style={{width:"100px"}} onClick={() => router.push({pathname:`/study/${param}`})}>목록</Button>
        <AlertModal style={{width:"100px"}} id={param} title={'미션 삭제'} text={'삭제하시겠습니까 ?'} type={"mission"}>삭제</AlertModal>
        <Button style={{width:"100px"}} type="primary"
        onClick={(e) =>{e.preventDefault(); router.push({pathname:"/study/rule", query:{name:studyMission.data.name, id:param, about:studyMission.data.about}})}}
        >수정</Button>
        <Button style={{width:"100px"}} type="primary" onClick={onClickRuleDetail}>규칙 상세보기</Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default RuleDetail;
