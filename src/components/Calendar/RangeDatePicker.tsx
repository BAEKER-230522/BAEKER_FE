import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale'; //한국어 설정
import React, { useState } from 'react';
import { S } from './style';

const StartToEndRangeDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  console.log(startDate.toLocaleDateString(), endDate.toLocaleDateString());
  
  return (
    <S.Container>
      <S.CustomDatePicker
        selected={startDate}
        onChange={(date:Date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        locale={ko}
      />
      <div style={{color:'white'}}>ㅡ</div>
      <S.CustomDatePicker
        selected={endDate}
        onChange={(date:Date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        locale={ko}
      />
    </S.Container>
  );
};

export default StartToEndRangeDatePicker;