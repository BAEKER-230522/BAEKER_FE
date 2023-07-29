import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale'; //한국어 설정
import React, { useState, Dispatch, useEffect } from 'react';
import { S } from './style';

interface IProps{
  setMissionStartDate : React.Dispatch<React.SetStateAction<string>>,
  setMissionEndDate : React.Dispatch<React.SetStateAction<string>>
}
const StartToEndRangeDatePicker = ({ setMissionStartDate, setMissionEndDate } : IProps ) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  useEffect(() => {
    let start = startDate.toLocaleDateString().slice(0, -1).split('. ')
    
    for(let i=0; i<start.length; i++){
      if(start[i].length === 1){
        start[i] = '0'+start[i]
      }
    }
    setMissionStartDate(start.join('-'))
    
  }, [startDate])

  useEffect(() => {
    let end = endDate.toLocaleDateString().slice(0, -1).split('. ')
    for(let i=0; i<end.length; i++){
      if(end[i].length === 1){
        end[i] = '0'+end[i]
      }
    }
    setMissionEndDate(end.join('-'))
  }, [endDate])
  
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