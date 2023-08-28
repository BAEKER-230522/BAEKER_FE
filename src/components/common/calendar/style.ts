import styled from "styled-components";
import DatePicker from 'react-datepicker';
import { themedPalette } from "@/styles/theme";


const CustomDatePicker = styled(DatePicker)`
  height: 30px;
  width: 150px;
  border: none;
  border-radius: 5px;
  text-align: center;
`

const Container = styled.div`
  display: flex;
  width: 600px;
  justify-content: start;
  align-items: center;
`

export const S = {Container, CustomDatePicker}