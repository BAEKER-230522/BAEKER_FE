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
}

const MemberSolvingStatus = ({ missionData, HEADER_ARR, userSolvedStatus }: IProps) => {
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
                  `https://www.acmicpc.net/problem/${memberStatus![0].problemStatusQueryDtos[idx - 1].problemNumber}`,
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
                  <S.CodeButton>code</S.CodeButton>
                </S.StatusBoxContainer>
              ) : (
                <S.StatusBoxContainer key={i}>
                  <S.Dot color={"#e31d2e"} />
                  <S.CodeButton>code</S.CodeButton>
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
