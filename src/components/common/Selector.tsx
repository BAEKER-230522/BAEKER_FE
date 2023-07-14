import React, { SetStateAction, useEffect } from 'react';
import { Select, Space } from 'antd';

interface IProps{
  data: any;
  setId : React.Dispatch<React.SetStateAction<number | undefined>>
}

interface IArr{
  value : number;
  label : number;
}

const Selector = ({data, setId}:IProps) => {
  const data_arr:IArr[] = []
  for(let i=0; i<data.data.length; i++){
    data_arr.push({value:data.data[i].id, label:data.data[i].name})
  }

  useEffect(() => {
    setId(data_arr[0].value)
  }, [])
  
  const handleChange = (value: number) => {
    setId(value)
  };

  if(data_arr.length === 0) return <div>스터디가 없습니다</div>
  
  return ( 
  <Space wrap style={{ width:'100%', height: 50 }}>
    <Select
      defaultValue={data_arr[0].value}
      onChange={handleChange}
      options={data_arr}
      style={{ width: 300 }}
    />
  </Space>
  )
    };

export default Selector;