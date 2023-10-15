import React from "react";
import { S } from "./style";
import { IMission } from "@/hooks/mission/useMissionDetail";

interface IUserSolvedStatus {
  nickname: string;
  problem_status: boolean[];
}

interface IProps {
  missionData: IMission;
  HEADER_ARR: string[];
  userSolvedStatus: IUserSolvedStatus[];
  setIsInitCodeModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCodeModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setIsInitCodeReviewModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCodeReviewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MemberSolvingStatus = ({
  missionData,
  HEADER_ARR,
  userSolvedStatus,
  setIsInitCodeModal,
  setIsCodeModalOpened,
  setIsInitCodeReviewModal,
  setIsCodeReviewModalOpen,
}: IProps) => {
  const codeModalHandler = () => {
    setIsInitCodeModal(true);
    setIsCodeModalOpened(true);
  };

  const codeReviewModalHandler = () => {
    setIsInitCodeReviewModal(true);
    setIsCodeReviewModalOpen(true);
  };

  console.log(missionData);

  return (
    <S.MemberSolvingStatusContainer>
      <S.MissionProblemListContainer
        numColumn={missionData.data.personalStudyRuleDtos[0].problemStatusQueryDtos.length + 1}>
        {HEADER_ARR.map((e: string, idx: number) => {
          return idx <= 0 ? (
            <div>{e}</div>
          ) : (
            <S.Problem
              onClick={() =>
                window.open(
                  `https://www.acmicpc.net/problem/${
                    missionData.data.personalStudyRuleDtos[0].problemStatusQueryDtos[idx - 1].problemNumber
                  }`,
                  "_blank"
                )
              }>
              {e}
            </S.Problem>
          );
        })}
        {userSolvedStatus.map((e: IUserSolvedStatus, idx: number) => (
          <React.Fragment key={idx}>
            <div>{e.nickname}</div>
            {e.problem_status.map((p_status: boolean, i: number) => {
              return p_status ? (
                <S.StatusBoxContainer key={i}>
                  <S.Dot color={"#5bc59c"} />
                  <S.CodeButton style={{ backgroundColor: "#5bc59c" }} onClick={codeReviewModalHandler}>
                    code
                  </S.CodeButton>
                </S.StatusBoxContainer>
              ) : (
                <S.StatusBoxContainer key={i}>
                  <S.Dot color={"#e31d2e"} />
                  <S.CodeButton style={{ backgroundColor: "#e31d2e" }} onClick={codeModalHandler}>
                    code
                  </S.CodeButton>
                </S.StatusBoxContainer>
              );
            })}
          </React.Fragment>
        ))}
      </S.MissionProblemListContainer>
    </S.MemberSolvingStatusContainer>
  );
};

export default MemberSolvingStatus;
