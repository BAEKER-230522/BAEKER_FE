import { S } from "./styled";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        type: "line",
        label: "1주간 문제 푼 현황",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 2,
        data: [2, 0, 1, 4, 20, 2, 1],
      },
    ],
  };
  return (
    <S.Wrapper>
      <Line data={data} width="100px" height="100px" />
    </S.Wrapper>
  );
};

export default LineChart;
