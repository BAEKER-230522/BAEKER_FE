import React, { SetStateAction } from 'react';
import { Select, Space } from 'antd';

interface IProps{
  data: any;
  setStudyId : React.Dispatch<React.SetStateAction<number | undefined>>
}

const Selector = ({data, setStudyId}:IProps) => {
  const data_arr = []
  
  for(let i=0; i<data.data.length; i++){
    data_arr.push({value:data.data[i].id, label:data.data[i].name})
  }
  
  const handleChange = (value: number) => {
    setStudyId(value)
    console.log(`selected ${value}`);
  };
  
  return ( 
  <Space wrap style={{ width: 120, height: 50 }}>
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