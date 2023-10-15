import React, { useState } from "react";
import Loading from "@/components/common/loading/Loading";
import AlertModal from "@/components/common/modal/AlertModal";
import useMissionDetail from "@/hooks/mission/useMissionDetail";
import MissionInfo from "@/components/mission/MissionInfo";
import styled from "styled-components";
import MissionProblemList from "@/components/mission/MissionProblemList";
import MemberSolvingStatus from "@/components/mission/MemberSolvingStatus";
import MissionCodeModal from "@/components/mission/CodeModal";
import { useRouter } from "next/router";
import { Button } from "antd";
import { PageContainer } from "@/styles/common.style";
import { studyApi } from "@/api/studyApi";
import ReviewModal from "@/components/mission/ReviewModal";

const MissionDetail = () => {
  const [isInitCodeModal, setIsInitCodeModal] = useState<boolean>(false);
  const [isCodeModalOpened, setIsCodeModalOpened] = useState<boolean>(false);

  const [isInitCodeReviewModal, setIsInitCodeReviewModal] = useState<boolean>(false);
  const [isCodeReviewModalOpen, setIsCodeReviewModalOpen] = useState<boolean>(false);
  const router = useRouter();
  const param = router.query;
  const studyId = router.query.studyId;
  const missionId = router.query.missionId;
  const { data: missionData, isLoading: getMissionDataLoading } = studyApi.useGetStudyRuleQuery(missionId);

  const { isLeader, TIME_SPAN_STATUS, userSolvedStatus, HEADER_ARR, PERIOD_HEADER, missionProgress } = useMissionDetail(
    { missionData }
  );
  const movePage = (type: "study") => {
    switch (type) {
      case "study":
        router.push({ pathname: `/study/${studyId}` });
        return;
    }
  };
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
        missionData={missionData}
        HEADER_ARR={HEADER_ARR}
        userSolvedStatus={userSolvedStatus}
        setIsInitCodeModal={setIsInitCodeModal}
        setIsCodeModalOpened={setIsCodeModalOpened}
        setIsInitCodeReviewModal={setIsInitCodeReviewModal}
        setIsCodeReviewModalOpen={setIsCodeReviewModalOpen}
      />
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
      {isCodeModalOpened && (
        <MissionCodeModal
          isInitCodeModal={isInitCodeModal}
          setIsInitCodeModal={setIsInitCodeModal}
          isCodeModalOpened={isCodeModalOpened}
          setIsCodeModalOpened={setIsCodeModalOpened}
        />
      )}
      {isCodeReviewModalOpen && (
        <ReviewModal
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

const S = {
  ButtonContainer,
  Container,
};
