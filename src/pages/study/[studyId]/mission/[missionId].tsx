import React, { useState, useEffect } from "react";
import Loading from "@/components/common/loading/Loading";
import AlertModal from "@/components/common/modal/AlertModal";
import useMissionDetail from "@/hooks/mission/useMissionDetail";
import MissionInfo from "@/components/mission/MissionInfo";
import styled from "styled-components";
import MissionProblemList from "@/components/mission/MissionProblemList";
import MemberSolvingStatus, { IProblemStatus } from "@/components/mission/MemberSolvingStatus";
import MissionCodeModal from "@/components/mission/CodeModal";
import { useRouter } from "next/router";
import { Button } from "antd";
import { PageContainer } from "@/styles/common.style";
import { studyApi } from "@/api/studyApi";
import ReviewModal from "@/components/mission/ReviewModal";
import instance from "@/api/instance";
import LocalStorage from "@/util/localstorage";
interface Comment {
  commentId: number;
  postId: number;
}

interface Post {
  comments: Comment[];
  content: string;
  memberId: number;
  title: string;
  problemStatusId: number;
}

export interface IUserUploadState {
  [key: number]: Post[];
}

const MissionDetail = () => {
  const isGuset = LocalStorage.getItem("memberId") === null ? true : false;
  const [problemInfo, setProblemInfo] = useState<Partial<IProblemStatus>>({});
  const [isInitCodeModal, setIsInitCodeModal] = useState<boolean>(false);
  const [isCodeModalOpened, setIsCodeModalOpened] = useState<boolean>(false);
  const [isInitCodeReviewModal, setIsInitCodeReviewModal] = useState<boolean>(false);
  const [isCodeReviewModalOpen, setIsCodeReviewModalOpen] = useState<boolean>(false);
  const [isUpdateLoading, setIsUpdateLoading] = useState<boolean>(false);
  const [userUploadStatus, setUserUploadStatus] = useState<IUserUploadState>({});
  const router = useRouter();
  const param = router.query;
  const studyId = router.query.studyId;
  const missionId = router.query.missionId;
  const { data: missionData, isLoading: getMissionDataLoading } = studyApi.useGetStudyRuleQuery(missionId, {
    refetchOnMountOrArgChange: true,
  });

  const { isLeader, TIME_SPAN_STATUS, userSolvedStatus, HEADER_ARR, PERIOD_HEADER, missionProgress } = useMissionDetail(
    { missionData, userUploadStatus }
  );
  const movePage = (type: "study") => {
    switch (type) {
      case "study":
        router.push({ pathname: `/study/${studyId}` });
        return;
    }
  };

  useEffect(() => {
    if (missionData) {
      const member_ids: number[] = [];
      for (let userId of missionData.data.personalStudyRuleDtos) {
        member_ids.push(Number(userId.memberId));
      }

      const URL = `${process.env.NEXT_PUBLIC_BASE_URL}pub/comm/web/post/v1/mission/`;
      const url_arr: string[] = [];
      for (let id of member_ids) {
        url_arr.push(URL + `${missionId}/${id}`);
      }
      const fetchUrl = (url: string) => instance.get(url);
      const getUserUploadStatus = () => {
        Promise.all(url_arr.map((url: string) => fetchUrl(url))).then((result) => {
          result.forEach(({ data: { data } }: any) => {
            if (data.length === 0) {
              setUserUploadStatus((prevStatus) => ({ ...prevStatus }));
            } else {
              const USER_OBJ = { [data[0].memberId]: data };
              setUserUploadStatus((prevStatus) => ({ ...prevStatus, ...USER_OBJ }));
            }
          });
        });
      };
      getUserUploadStatus();
    }
  }, [isUpdateLoading, getMissionDataLoading]);
  if (getMissionDataLoading || userSolvedStatus === undefined)
    return (
      <S.Container>
        <Loading />
      </S.Container>
    );

  return (
    <S.Container>
      <MissionInfo missionData={missionData} missionProgress={missionProgress} />
      <MissionProblemList missionData={missionData} PERIOD_HEADER={PERIOD_HEADER} TIME_SPAN_STATUS={TIME_SPAN_STATUS} />
      <MemberSolvingStatus
        setProblemInfo={setProblemInfo}
        missionData={missionData}
        HEADER_ARR={HEADER_ARR}
        userSolvedStatus={userSolvedStatus}
        setIsInitCodeModal={setIsInitCodeModal}
        setIsCodeModalOpened={setIsCodeModalOpened}
        setIsInitCodeReviewModal={setIsInitCodeReviewModal}
        setIsCodeReviewModalOpen={setIsCodeReviewModalOpen}
      />
      <S.Message>문제 해결 여부는 2시간 주기로 업데이트됩니다.</S.Message>
      <S.ButtonContainer>
        <Button
          type="primary"
          style={{ width: "80px", height: "32px", padding: "4px 15px", marginRight: "10px" }}
          onClick={() => movePage("study")}>
          목록
        </Button>
        {isLeader && (
          <AlertModal
            data={Number(param.missionId)}
            title={"미션 삭제"}
            text={"삭제하시겠습니까 ?"}
            type={"mission"}
            backId={Number(param.studyId)}
            buttonText={"삭제하기"}>
            삭제
          </AlertModal>
        )}
      </S.ButtonContainer>
      {isCodeModalOpened && !isGuset && (
        <MissionCodeModal
          studyId={Number(studyId)}
          setIsUpdateLoading={setIsUpdateLoading}
          problemInfo={problemInfo}
          missionId={Number(param.missionId)}
          isInitCodeModal={isInitCodeModal}
          setIsInitCodeModal={setIsInitCodeModal}
          isCodeModalOpened={isCodeModalOpened}
          setIsCodeModalOpened={setIsCodeModalOpened}
        />
      )}
      {isCodeReviewModalOpen && !isGuset && (
        <ReviewModal
          problemInfo={problemInfo}
          isInitCodeReviewModal={isInitCodeReviewModal}
          setIsInitCodeReviewModal={setIsInitCodeReviewModal}
          isCodeReviewModalOpen={isCodeReviewModalOpen}
          setIsCodeReviewModalOpen={setIsCodeReviewModalOpen}
        />
      )}
    </S.Container>
  );
};

export default MissionDetail;

const Container = styled(PageContainer)`
  padding-bottom: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  height: 40px;
  margin-top: 10px;
`;

const Message = styled.div`
  background-color: #e7e3e3;
  height: 30px;
  width: auto;
  padding: 5px 15px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;

const S = {
  Message,
  ButtonContainer,
  Container,
};
