import { IMission } from "@/hooks/mission/useMissionDetail";
import { Progress } from "antd";
import { S } from "./style";

interface IProps {
  missionData: IMission;
  missionProgress: number;
}

const MissionInfo = ({ missionData, missionProgress }: IProps) => {
  return (
    <S.MissionInfoContainer>
      <S.TitleContainer>
        <S.Title>{missionData.data.name}</S.Title>
        <S.About>{missionData.data.about}</S.About>
      </S.TitleContainer>
      <S.Divider></S.Divider>
      <S.TitleContainer>
        <S.Title>미션 진행률</S.Title>
        <Progress type="circle" percent={missionProgress} status={"active"} width={80} />
      </S.TitleContainer>
      <S.Divider></S.Divider>
      <S.TitleContainer>
        <S.Title>시작 날짜</S.Title>
        <S.About>{missionData.data.startDate}</S.About>
      </S.TitleContainer>
      <S.Divider></S.Divider>
      <S.TitleContainer>
        <S.Title>종료 날짜</S.Title>
        <S.About>{missionData.data.deadline}</S.About>
      </S.TitleContainer>
    </S.MissionInfoContainer>
  );
};

export default MissionInfo;
