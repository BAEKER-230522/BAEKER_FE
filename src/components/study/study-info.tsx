import { IMG_URL } from "../../../public/mock";
import { S } from "./style";
import { studyApi } from "@/api/studyApi";
import { useRouter } from "next/router";
import RequestModal from "../common/modal/RequestModal";
import Loading from "../common/loading/Loading";

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
        <S.Img src={IMG_URL} />
        <S.StudyInfoContainer>
          <Loading />
        </S.StudyInfoContainer>
      </S.Container>
    );
  return (
    <S.Container>
      <S.Img src={IMG_URL} />
      <S.StudyInfoContainer>
        <S.Title>{data.data.name}</S.Title>
        <S.About style={{ color: "white" }}>{data.data.about}</S.About>
        {isLeader ? (
          <S.ButtonWrapper>
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push({
                  pathname: "/study/rule",
                  query: { param: studyId },
                });
              }}
            >
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
              }}
            >
              스터디 수정하기
            </button>
          </S.ButtonWrapper>
        ) : isUserStudy ? null : (
          <RequestModal memberId={memberId} studyId={String(studyId)} />
        )}
      </S.StudyInfoContainer>
    </S.Container>
  );
};

export default StudyInfo;
