import styled from "styled-components";
import { themedPalette } from "@/styles/theme";
import LineChart from "@/components/common/chart/chart";
import UserInfo from "@/components/common/user-info/user-info";
import UserSolvedInfo from "@/components/common/user-info/user-solved-info";
import Tab from "@/components/common/tab/tab";
import SolvedRecord from "@/components/common/tab/solved-record";
import { useSelector } from "react-redux";
import { studyApi } from "@/api/studyApi";
import { useRouter } from "next/router";
import { memberApi } from "@/api/memberApi";
import Loading from "@/components/common/loading/Loading";
import { PageContainer } from "@/styles/common.style";
import BasicTable from "@/components/common/table/BasicTable";
import { TABLE_CONSTANT } from "@/constant/table";
import LocalStorage from "@/util/localstorage";

export interface IUserData {
  id: number;
  bronze: number;
  diamond: number;
  gold: number;
  ruby: number;
  silver: number;
  platinum: number;
}

const Member = () => {
  const memberId = Number(LocalStorage.getItem("memberId"));
  const router = useRouter();
  const { detail: param } = router.query;
  const { data: userStudyList, isLoading: isGetUserStudyListLoading } = studyApi.useGetUserStudyListQuery({
    memberId: param,
    status: 1,
  });
  const { data: userData, isLoading: isGetUserInfoLoading } = memberApi.useGetMemberQuery(param);
  const tabState = useSelector((state: any) => {
    return state.tab.profileTabState;
  });
  const TAB_ELEMENTS_OTHER = ["백준", "스터디"];

  if (isGetUserStudyListLoading || isGetUserInfoLoading)
    return (
      <S.Container>
        <S.InfoContainer>
          <Loading />
        </S.InfoContainer>
        <S.RecordContainer>
          <Loading />
        </S.RecordContainer>
      </S.Container>
    );

  const Component = (num: number) => {
    switch (num) {
      case 0:
        return (
          <>
            <SolvedRecord id={Number(param)} data={userData} />
            <LineChart id={Number(param)} type={"member"} />
          </>
        );
      case 1:
        return (
          <BasicTable
            data={userStudyList.data.data}
            category={TABLE_CONSTANT.STUDY.CATEGORY}
            widthRatio={TABLE_CONSTANT.STUDY.WIDTH_RATIO}
            url="study"
            routeType="defaultRoute"
          />
        );
    }
  };
  return (
    <S.Container>
      <S.InfoContainer>
        <UserInfo userData={userData.data} userId={Number(param)} loginUser={memberId} />
        <UserSolvedInfo userData={userData.data} />
      </S.InfoContainer>
      <Tab elements={TAB_ELEMENTS_OTHER} type="profile" />
      <S.RecordContainer>{Component(tabState)}</S.RecordContainer>
    </S.Container>
  );
};

export default Member;

const Container = styled(PageContainer)``;

const InfoContainer = styled.div`
  margin: 60px 0px 40px 0px;
  width: 50%;
  display: flex;
  justify-content: center;
`;

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
