import { PageContainer } from "@/styles/common.style";
import { TABLE_CONSTANT } from "@/constant/table";
import { memberApi } from "@/api/memberApi";
import { studyApi } from "@/api/studyApi";
import { themedPalette } from "@/styles/theme";
import styled from "styled-components";
import LineChart from "@/components/common/chart/chart";
import UserInfo from "@/components/common/user-info/user-info";
import UserSolvedInfo from "@/components/common/user-info/user-solved-info";
import Tab from "@/components/common/tab/tab";
import SolvedRecord from "@/components/common/tab/solved-record";
import Loading from "@/components/common/loading/Loading";
import BasicTable from "@/components/common/table/BasicTable";
import InviteTable from "@/components/common/table/InviteTable";
import LocalStorage from "@/util/localstorage";
import { useState } from "react";

const Profile = () => {
  const memberId = Number(LocalStorage.getItem("memberId"));
  const TAB_ELEMENTS = ["현황", "스터디", "가입 신청", "가입 초대"];
  const [tabState, setTabState] = useState<number>(0);
  const { data: userStudyList, isLoading: isStudyListLoading } = studyApi.useGetUserStudyListQuery({
    memberId,
    status: 1,
  });
  const { data: userStudyJoinRequestList, isLoading: isStudyJoinRequestListLoading } =
    studyApi.useGetUserStudyListQuery({
      memberId,
      status: 2,
    });
  const { data: userStudyInviteList, isLoading: isStudyInviteListLoading } = studyApi.useGetUserStudyListQuery({
    memberId,
    status: 3,
  });
  const { data: userData, isLoading: isUserDataLoading } = memberApi.useGetMemberQuery(memberId);

  if (isStudyListLoading || isStudyJoinRequestListLoading || isStudyInviteListLoading || isUserDataLoading)
    return (
      <S.Container>
        <S.InfoContainer>
          <Loading />
        </S.InfoContainer>
        <Tab elements={TAB_ELEMENTS} tabState={tabState} setTabState={setTabState} />
        <S.RecordContainer>
          <Loading />
        </S.RecordContainer>
      </S.Container>
    );

  return (
    <S.Container>
      <S.InfoContainer>
        <UserInfo userData={userData.data} userId={memberId} />
        <UserSolvedInfo userData={userData.data} />
      </S.InfoContainer>
      <Tab elements={TAB_ELEMENTS} tabState={tabState} setTabState={setTabState} />
      <S.RecordContainer>
        {tabState === 0 && (
          <>
            <SolvedRecord data={userData} />
            <LineChart id={memberId} type={"member"} />
          </>
        )}
        {tabState === 1 && (
          <BasicTable
            data={userStudyList.data.data}
            category={TABLE_CONSTANT.STUDY.CATEGORY}
            widthRatio={TABLE_CONSTANT.STUDY.WIDTH_RATIO}
            url="study"
            routeType="defaultRoute"
          />
        )}
        {tabState === 2 && (
          <BasicTable
            data={userStudyJoinRequestList.data.data}
            category={TABLE_CONSTANT.STUDY.CATEGORY}
            widthRatio={TABLE_CONSTANT.STUDY.WIDTH_RATIO}
            url="study"
            routeType="defaultRoute"
          />
        )}
        {tabState === 3 && (
          <InviteTable
            category={TABLE_CONSTANT.INVITE.CATEGORY}
            widthRatio={TABLE_CONSTANT.INVITE.WIDTH_RATIO}
            memberId={memberId}
            data={userStudyInviteList.data.data}
            url="study"
            routeType="defaultRoute"
          />
        )}
      </S.RecordContainer>
    </S.Container>
  );
};

export default Profile;

const Container = styled(PageContainer)``;

const InfoContainer = styled.div`
  margin: 60px 0px 40px 0px;
  width: 50%;
  display: flex;
  justify-content: center;
`;

// check
export const RecordContainer = styled.div`
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

const S = {
  Container,
  InfoContainer,
  RecordContainer,
};
