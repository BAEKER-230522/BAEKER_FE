import React, { useState } from 'react';
import { S } from './style';
import { Button } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { useDispatch } from 'react-redux';
import * as userAction from "@/store/modules/mission";

const RemoveProblemButton = ({idx}:{idx:number}) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState<SizeType>('middle'); // default is 'middle'

  const handleRemoveMissionProblem = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()  
    dispatch(userAction.removeProblem(idx))
  }

  return (
      <S.ButtonWrapper>
        <Button type="primary" size={size} onClick={(e) => handleRemoveMissionProblem(e)}>
          삭제
        </Button>
      </S.ButtonWrapper>
)};

export default RemoveProblemButton;