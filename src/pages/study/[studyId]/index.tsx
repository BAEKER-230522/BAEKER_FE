import styled from "styled-components";
import { themedPalette } from "@/styles/theme";
import StudyInfo from "@/components/study/study-info";
import Tab from "@/components/common/tab/tab";
import SolvedRecord from "@/components/common/tab/solved-record";
import LineChart from "@/components/common/chart/chart";
import SolveStatus from "@/components/common/solve-status";
import { studyApi } from "@/api/studyApi";
import { useRouter } from "next/router";
import Loading from "@/components/common/loading/Loading";
import { useState, useEffect } from "react";
import { PageContainer } from "@/styles/common.style";
import { TABLE_CONSTANT } from "@/constant/table";
import MissionTable from "@/components/common/table/MissionTable";
import MemberTable from "@/components/common/table/MeberTable";
import RequestTable from "@/components/common/table/RequestTable";
import LocalStorage from "@/util/localstorage";

interface IMission {
  id: number;
  name: string;
  about: string;
  createDate: string;
  modifyDate: string;
  mission: string;
  status: string;
  startDate: string;
  deadline: string;
}

interface IMember {
  about: string;
  baekJoonName: string;
  ranking: number;
}

export interface IUserRoles {
  isUserStudy: boolean;
  isGuest: boolean;
  isLeader: boolean;
}

const StudyDetail = () => {
  const memberId = Number(LocalStorage.getItem("memberId"));

  const router = useRouter();
  const { studyId: param } = router.query;
  const { data: studyMissionList, isLoading: getStudyMissionListLoading } = studyApi.useGetStudyRuleListQuery(
    Number(param)
  );
  const { data: stduyMemberList, isLoading: getMemberListLoading } = studyApi.useGetStudyMemberListQuery(Number(param));
  const { data: studyPendingList, isLoading: getPedingListLoading } = studyApi.useGetPendingListQuery(Number(param));
  const { data: studyInfo, isLoading: getStudyInfoLoading } = studyApi.useGetStudyInfoQuery(Number(param));
  const [userRoles, setUserRoles] = useState<IUserRoles>({
    isUserStudy: false,
    isGuest: false,
    isLeader: false,
  });
  const [TAB_ELEMENTS, setTAB_ELEMENTS] = useState<string[]>(["현황", "미션", "멤버"]);
  const [missionList, setMissionList] = useState<IMission[]>([]);
  const [memberList, setMemberList] = useState<IMember[]>([]);
  const [tabState, setTabState] = useState<number>(0);

  useEffect(() => {
    if (memberId == 0) setUserRoles((prevRole) => ({ ...prevRole, ["isGuest"]: true }));
    if (!getMemberListLoading) {
      for (let i = 0; i < stduyMemberList.data.length; i++) {
        if (memberId === stduyMemberList.data[i].id) {
          setUserRoles((prevRole) => ({ ...prevRole, ["isUserStudy"]: true }));
          break;
        }
      }
    }

    if (stduyMemberList !== undefined) {
      setMemberList([...stduyMemberList.data].sort((a, b) => a.ranking - b.ranking));
    }

    if (studyMissionList !== undefined) {
      setMissionList([...studyMissionList.data].reverse());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stduyMemberList, studyMissionList]);

  useEffect(() => {
    if (studyInfo !== undefined) {
      if (studyInfo.data.leader === memberId) {
        setUserRoles((prevRole) => ({ ...prevRole, ["isLeader"]: true }));
        setTAB_ELEMENTS(["현황", "미션", "멤버", "가입 요청", "초대 현황"]);
      } else {
        setTAB_ELEMENTS(["현황", "미션", "멤버"]);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studyInfo]);

  if (getMemberListLoading || getPedingListLoading || getStudyMissionListLoading || getStudyInfoLoading)
    return (
      <S.StudyContainer>
        <StudyInfo userRoles={userRoles} memberId={memberId} />
        <Tab elements={TAB_ELEMENTS} tabState={tabState} setTabState={setTabState} />
        <S.ContentContainer>
          <Loading />
        </S.ContentContainer>
      </S.StudyContainer>
    );

  return (
    <S.StudyContainer>
      <StudyInfo userRoles={userRoles} memberId={memberId} />
      <Tab elements={TAB_ELEMENTS} tabState={tabState} setTabState={setTabState} />
      <S.ContentContainer>
        {tabState === 0 && (
          <>
            <S.StatusContainer>
              <SolveStatus studyInfo={studyInfo} />
              <S.ChartContainer>
                <SolvedRecord id={param} data={studyInfo} />
                <LineChart id={Number(param)} type={"study"} />
              </S.ChartContainer>
            </S.StatusContainer>
          </>
        )}
        {tabState === 1 && (
          <MissionTable
            data={missionList}
            category={TABLE_CONSTANT.MISSION.CATEGORY}
            widthRatio={TABLE_CONSTANT.MISSION.WIDTH_RATIO}
            url="mission"
            routeType="customRoute"
          />
        )}
        {tabState === 2 && (
          <MemberTable
            data={memberList}
            category={TABLE_CONSTANT.MEMBER.CATEGORY}
            widthRatio={TABLE_CONSTANT.MEMBER.WIDTH_RATIO}
          />
        )}
        {tabState === 3 && (
          <RequestTable
            category={TABLE_CONSTANT.REQUEST.CATEGORY}
            widthRatio={TABLE_CONSTANT.REQUEST.WIDTH_RATIO}
            studyId={param}
            data={studyPendingList.data.pending}
          />
        )}
        {tabState === 4 && (
          <MemberTable
            category={TABLE_CONSTANT.MEMBER.CATEGORY}
            widthRatio={TABLE_CONSTANT.REQUEST.WIDTH_RATIO}
            data={studyPendingList.data.inviting}
          />
        )}
      </S.ContentContainer>
    </S.StudyContainer>
  );
};

export default StudyDetail;

const Container = styled(PageContainer)`
  height: 95vh;
`;

const StudyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${themedPalette.bg_element};
`;

const RecordContainer = styled.div`
  width: 80%;
  padding: 20px;
  height: 65vh;
  display: flex;
  background-color: ${themedPalette.bg_element2};
  border-radius: 10px;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 100px;
`;

const ContentContainer = styled(RecordContainer)`
  width: 70%;
  height: 70vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ChartContainer = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const StatusContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.input`
  width: 40%;
  height: 50px;
  border-radius: 10px;
  background-color: ${themedPalette.bg_element4};
  color: ${themedPalette.text2};
  font-weight: 500;
  cursor: pointer;
  border: none;
  margin-top: 50px;
`;

const S = {
  Container,
  ContentContainer,
  ChartContainer,
  StatusContainer,
  Button,
  StudyContainer,
};
