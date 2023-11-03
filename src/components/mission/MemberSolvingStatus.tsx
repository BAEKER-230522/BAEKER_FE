import React from "react";
import { S } from "./style";
import { IMissionInner } from "@/hooks/mission/useMissionDetail";
export interface IProblemStatus {
  status: boolean;
  id: number;
  title: string;
}

export interface IUserSolvedStatus {
  nickname: string;
  problem_status: IProblemStatus[];
  userUploadList: number[];
}

interface IUserUploadElement {
  memberId: number;
  missionId: number;
  postId: number;
  problemStatusId: number;
  title: string;
}

interface IProps {
  missionData: IMissionInner;
  HEADER_ARR: string[];
  userSolvedStatus: IUserSolvedStatus[];
  setProblemInfo: React.Dispatch<React.SetStateAction<IProblemStatus>>;
  setIsInitCodeModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCodeModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setIsInitCodeReviewModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCodeReviewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MemberSolvingStatus = ({
  setProblemInfo,
  missionData,
  HEADER_ARR,
  userSolvedStatus,
  setIsInitCodeModal,
  setIsCodeModalOpened,
  setIsInitCodeReviewModal,
  setIsCodeReviewModalOpen,
}: IProps) => {
  const codeModalHandler = (problemStatus: IProblemStatus) => {
    setIsInitCodeModal(true);
    setIsCodeModalOpened(true);
    setProblemInfo(problemStatus);
  };

  const codeReviewModalHandler = (problemStatus: IProblemStatus) => {
    setIsInitCodeReviewModal(true);
    setIsCodeReviewModalOpen(true);
    setProblemInfo(problemStatus);
  };

  console.log(userSolvedStatus);

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
            {e.problem_status.map((problemStatus: IProblemStatus, i: number) => {
              return problemStatus.status ? (
                <S.StatusBoxContainer key={i}>
                  <S.Dot color={"#5bc59c"} />
                  {e.userUploadList.includes(problemStatus.id) ? (
                    <S.CodeButton
                      style={{ backgroundColor: "#5bc59c" }}
                      onClick={() => codeReviewModalHandler(problemStatus)}>
                      code
                    </S.CodeButton>
                  ) : (
                    <S.CodeButton
                      style={{ backgroundColor: "#e31d2e" }}
                      onClick={() => codeModalHandler(problemStatus)}>
                      code
                    </S.CodeButton>
                  )}
                </S.StatusBoxContainer>
              ) : (
                <S.StatusBoxContainer key={i}>
                  <S.Dot color={"#e31d2e"} />
                  {e.userUploadList.includes(problemStatus.id) ? (
                    <S.CodeButton
                      style={{ backgroundColor: "#5bc59c" }}
                      onClick={() => codeReviewModalHandler(problemStatus)}>
                      code
                    </S.CodeButton>
                  ) : (
                    <S.CodeButton
                      style={{ backgroundColor: "#e31d2e" }}
                      onClick={() => codeModalHandler(problemStatus)}>
                      code
                    </S.CodeButton>
                  )}
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
