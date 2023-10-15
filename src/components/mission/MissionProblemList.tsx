import { S } from "./style";
import { calculateDuration } from "@/util/date";
import { IMission } from "@/hooks/mission/useMissionDetail";

interface IProps {
  PERIOD_HEADER: string[];
  missionData: IMission;
  TIME_SPAN_STATUS: boolean[];
}

const MissionProblemList = ({ missionData, PERIOD_HEADER, TIME_SPAN_STATUS }: IProps) => {
  return (
    <S.MissionProblemListContainer
      numColumn={calculateDuration(missionData.data.startDate, missionData.data.deadline) + 1}>
      {PERIOD_HEADER!.map((e: string, idx: number) => (
        <div key={idx}>{e}</div>
      ))}
      {TIME_SPAN_STATUS!.map((e: boolean, idx: number) => {
        return e ? (
          <div key={idx}>
            <S.Dot color={"#6495Ed"} />
          </div>
        ) : (
          <div key={idx}></div>
        );
      })}
    </S.MissionProblemListContainer>
  );
};

export default MissionProblemList;
