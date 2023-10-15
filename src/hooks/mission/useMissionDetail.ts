import { useEffect, useState } from "react";
import LocalStorage from "@/util/localstorage";
import { calculateDuration, getTodayDateFormatted, isFuture } from "../../util/date";

interface IProblemStatusQueryDtos {
  memberId: number;
  memory: number;
  problemName: string;
  problemNumber: number;
  problemStatus: string;
  time: number;
}

interface IPersonalStudyRuleDtos {
  nickName: string;
  personalStudyRuleStatus: string;
  problemStatusQueryDtos: IProblemStatusQueryDtos[];
}

interface IMissionData {
  about: string;
  deadline: string;
  id: number;
  mission: string;
  studyRuleName: string;
  personalStudyRuleDtos: IPersonalStudyRuleDtos[];
  startDate: string;
  status: string;
  study: IStudy;
  xp: number;
}

export interface IMission {
  data: IMissionData;
}

interface IMember {
  data: IMemberList[];
}

interface IStudy {
  leader: number;
}

interface IMemberList {
  id: number;
  nickname: string;
}

interface IProps {
  missionData: IMission;
}

const useMissionDetail = ({ missionData }: IProps) => {
  const [memberStatus, setMemberStatus] = useState<IPersonalStudyRuleDtos[]>();
  const [missionProgress, setMissionProgress] = useState(0);
  const [userSolvedStatus, setUserSolvedStatus] = useState<any>();
  const [HEADER_ARR, setHEADER_ARR] = useState<string[]>([]);
  const [TIME_SPAN_STATUS, setTIME_SPAN_STATUS] = useState<boolean[]>([]);
  const [PERIOD_HEADER, setPERIOD_HEADER] = useState<string[]>([]);
  const [isLeader, setIsLeader] = useState<boolean>(false);

  useEffect(() => {
    if (missionData !== undefined) {
      if (LocalStorage.getItem("memberId") === String(missionData.data.study.leader)) setIsLeader(true);

      const USER_STATUS = [];

      // 총 문제 개수
      let TOTAL_PROPLEM_COUNT = missionData.data.personalStudyRuleDtos[0].problemStatusQueryDtos.length;
      // 총 스터디 멤버 인원
      let STUDY_MEMBER_COUNT = missionData.data.personalStudyRuleDtos.length;
      // 총 COMPLETE 개수
      let USER_COMPLETE_COUNT = 0;

      setMemberStatus(missionData.data.personalStudyRuleDtos);
      setTIME_SPAN_STATUS(
        Array.from(
          {
            length: calculateDuration(missionData.data.startDate, missionData.data.deadline) + 1,
          },
          () => false
        )
      );

      // 각 멤버 문제풀이 현황 상태
      for (let k = 0; k < missionData.data.personalStudyRuleDtos.length; k++) {
        //
        const PROBLEM_STATUS = [];
        for (let j = 0; j < missionData.data.personalStudyRuleDtos[k].problemStatusQueryDtos.length; j++) {
          if (missionData.data.personalStudyRuleDtos[k].problemStatusQueryDtos[j].problemStatus === "COMPLETE") {
            USER_COMPLETE_COUNT += 1;
            PROBLEM_STATUS.push(true);
          } else {
            PROBLEM_STATUS.push(false);
          }
        }
        USER_STATUS.push({
          nickname: missionData.data.personalStudyRuleDtos[k].nickName,
          problem_status: PROBLEM_STATUS,
        });
      }

      setUserSolvedStatus(USER_STATUS);

      let newStatus = [
        ...Array.from(
          {
            length: calculateDuration(missionData.data.startDate, missionData.data.deadline) + 1,
          },
          () => false
        ),
      ]; // 기존 배열 복사

      // 미래가 아닐 경우만 동작
      if (isFuture(missionData.data.startDate)) {
        for (let i = 0; i < calculateDuration(missionData.data.startDate, getTodayDateFormatted()) + 1; i++) {
          if (i >= calculateDuration(missionData.data.startDate, missionData.data.deadline) + 1) break;
          newStatus[i] = true;
        }
      }
      setTIME_SPAN_STATUS(newStatus);
      const HEADER = ["닉네임"];
      for (let i = 0; i < missionData.data.personalStudyRuleDtos[0].problemStatusQueryDtos.length; i++) {
        HEADER.push(missionData.data.personalStudyRuleDtos[0].problemStatusQueryDtos[i].problemName);
      }

      // missionData.data.personalStudyRuleDtos[0].problemStatusQueryDtos.length -> 문제 개수
      // 퍼센트 -> 문제 풀이 개수 / 총 문제 개수
      setHEADER_ARR(HEADER);
      setPERIOD_HEADER(
        Array.from(
          {
            length: calculateDuration(missionData.data.startDate, missionData.data.deadline) + 1,
          },
          (_, i) => `${i + 1}일차`
        )
      );
      setMissionProgress((USER_COMPLETE_COUNT / (TOTAL_PROPLEM_COUNT * STUDY_MEMBER_COUNT)) * 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [missionData]);

  return {
    isLeader,
    memberStatus,
    TIME_SPAN_STATUS,
    userSolvedStatus,
    HEADER_ARR,
    PERIOD_HEADER,
    missionProgress,
  };
};

export default useMissionDetail;
