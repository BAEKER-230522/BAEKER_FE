import { S } from "./style";
import { studyApi } from "@/api/studyApi";
import { useRouter } from "next/router";
import RequestModal from "../common/modal/RequestModal";
import Loading from "../common/loading/Loading";
import AlertModal from "../common/modal/AlertModal";
interface IProps {
  isUserStudy: boolean;
  isLeader: boolean;
  memberId: number;
}

// 리더일 경우 -> 미션 만들기, 스터디 수정하기, 가입요청 탭
// 스터디원일 경우, 비로그인 -> 오직 GET 요청
// 스터디원 아닌 로그인 유저 -> 스터디 가입하기
const StudyInfo = ({ isLeader, isUserStudy, memberId }: IProps) => {
  const router = useRouter();
  const { studyId } = router.query;
  const { data, isLoading } = studyApi.useGetStudyInfoQuery(studyId);
  if (isLoading)
    return (
      <S.Container>
        <S.StudyInfoContainer>
          <Loading />
        </S.StudyInfoContainer>
      </S.Container>
    );
  return (
    <S.Container>
      <S.StudyInfoContainer>
        <S.Title>{data.data.name}</S.Title>
        <S.About>{data.data.about}</S.About>
        {isLeader ? (
          <S.ButtonWrapper width="350px">
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push({
                  pathname: "/study/mission",
                  query: { param: studyId },
                });
              }}>
              미션 만들기
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push({
                  pathname: "/study/manage",
                  query: {
                    name: data.data.name,
                    id: studyId,
                    about: data.data.about,
                    capacity: data.data.capacity,
                  },
                });
              }}>
              스터디 수정하기
            </button>
            <AlertModal
              data={{ memberId, studyId }}
              title={"스터디 삭제"}
              text={"삭제하시겠습니까 ?"}
              type={"delete"}
              backId={Number(studyId)}
              buttonText={"스터디 삭제"}>
              삭제
            </AlertModal>
          </S.ButtonWrapper>
        ) : isUserStudy ? (
          <S.ButtonWrapper width="150px">
            <AlertModal
              data={{ memberId, studyId }}
              title={"스터디 탈퇴"}
              text={"탈퇴하시겠습니까 ?"}
              type={"study"}
              backId={Number(studyId)}
              buttonText={"탈퇴하기"}>
              탈퇴
            </AlertModal>
          </S.ButtonWrapper>
        ) : (
          <S.ButtonWrapper width="150px">
            <RequestModal memberId={memberId} studyId={String(studyId)} />
          </S.ButtonWrapper>
        )}
      </S.StudyInfoContainer>
    </S.Container>
  );
};

export default StudyInfo;
