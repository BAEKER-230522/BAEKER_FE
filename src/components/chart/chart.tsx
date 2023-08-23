import { S } from "./style";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { Line } from "react-chartjs-2";
import { memberApi } from "@/api/memberApi";
import { studyApi } from "@/api/studyApi";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

interface IDatasets {
  type: 'line';
  label: string;
  borderColor: string;
  borderWidth: number;
  data: number[]
}

interface IChart {
  labels: string[];
  datasets: IDatasets[]
}

interface IProps {
  id : number;
  type : "study" | "member";
}


const LineChart = ({id, type}:IProps) => {
  const label_obj:any = {THURSDAY:"Thu", FRIDAY:"Fri", SATURDAY:'Sat', MONDAY:'Mon', TUESDAY:'Tue', WEDNESDAY:'Wed'};
  const {data: userWeeklyProblem, isLoading: isLoadingMember} = memberApi.useWeeklyUserProblemStatusQuery(id)
  const {data: studyWeeklyProblem, isLoading: isLoadingStudy} = studyApi.useWeeklyStudyProblemStatusQuery(id)
  const [chartData, setChartData] = useState<IChart>();
  useEffect(() => {
    const LABELS = [];
    const SOLVED_RECORD = [];
    let RECORD_DATA:any;
    if(type === "study") RECORD_DATA = studyWeeklyProblem
    if(type === "member") RECORD_DATA = userWeeklyProblem
    console.log(RECORD_DATA, id);
    
    if(!isLoadingMember && !isLoadingStudy && RECORD_DATA !== undefined){
      for(let i=0; i<RECORD_DATA.data.length; i++){
        LABELS.push(label_obj[RECORD_DATA.data[i].dayOfWeek])
        SOLVED_RECORD.push(RECORD_DATA.data[i].solvedCount)
      }
    }

    const CHART_DATA = {
      labels: LABELS,
      datasets: [
        {
          type: "line" as const,
          label: "1주간 문제 푼 현황",
          borderColor: "rgb(54, 162, 235)",
          borderWidth: 2,
          data: SOLVED_RECORD,
        }
      ]
    }
    setChartData(CHART_DATA)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingMember, isLoadingStudy])

  if(chartData === undefined) return <Loading/>
  return (
    <S.Wrapper>
      <Line data={chartData} width="100px" height="100px" />
    </S.Wrapper>
  );
};

export default LineChart;
