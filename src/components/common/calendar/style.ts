import styled from "styled-components";
import dynamic from "next/dynamic";

const DatePicker = dynamic(() => import("react-datepicker"), {
  ssr: false, // 서버 사이드 렌더링에서 제외
});

const CustomDatePicker = styled(DatePicker)`
  height: 30px;
  width: 150px;
  border: none;
  border-radius: 5px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  width: 600px;
  justify-content: start;
  align-items: center;
`;

export const S = { Container, CustomDatePicker };
