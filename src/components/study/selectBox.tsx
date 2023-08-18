import React, { ChangeEvent, FC, SetStateAction, useState } from 'react';
import { S } from './style'
import Loading from '../Loading/Loading';


interface Option {
  value: string;
  id: number;
  data: any;
  isLoading: boolean
}

interface OptionElement extends HTMLOptionElement {
  dataset: {
    option: string;
  };
}


const SelectBox = ({selectedOption, setSelectedOption, data, isLoading}:any) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = JSON.parse((event.target.selectedOptions[0] as OptionElement).dataset.option) as Option;
    setSelectedOption(selectedOption);
  };

  if(isLoading) return (<S.SelectBoxContainer><Loading/></S.SelectBoxContainer>) 
  
  return (
    <S.SelectBoxContainer value={selectedOption.value} onChange={handleChange}>
      <option value="">미션 선택</option>
      {data.data.map((option, idx) => (
        <option key={idx} data-option={JSON.stringify({ value: option.name, id: option.id })}>
        {option.name}
      </option>
      ))}
    </S.SelectBoxContainer>
  );
};

export default SelectBox;