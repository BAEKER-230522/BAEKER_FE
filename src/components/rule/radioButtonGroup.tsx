import React, { useState } from 'react';
import { S } from './style';
const RadioButtonGroup = () => {
  const [selectedValue, setSelectedValue] = useState<string>('option1');

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const LEVEL = ['ALL', 'BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'DIAMOND', 'RUBY']

  return (
    <S.RadioBtnGroupContainer>
      {LEVEL.map((e, index) => (
      <S.RadioContainer key={index}>
        <S.Label>{e}</S.Label>
        <input
          type="radio"
          value={e}
          checked={selectedValue === e}
          onChange={handleChange}
        />
      </S.RadioContainer>
      ))}
    </S.RadioBtnGroupContainer>
  );
};

export default RadioButtonGroup;