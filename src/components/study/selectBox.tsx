import React, { ChangeEvent, FC, SetStateAction, useState } from 'react';
import { S } from './style';
import { ISelectOption } from '@/pages/study/rule';
import { ruleApi } from '@/api/ruleApi';

interface IProps{
  selectedOption: ISelectOption;
  setSelectedOption: React.Dispatch<SetStateAction<ISelectOption>>
}

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


const SelectBox = ({selectedOption, setSelectedOption, data, isLoading}:IProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = JSON.parse((event.target.selectedOptions[0] as OptionElement).dataset.option) as Option;
    setSelectedOption(selectedOption);
  };

  if(isLoading) return <div>Loading...</div>
  
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