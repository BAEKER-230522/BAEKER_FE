import React, { useState } from 'react';
import { S } from './styled';
import { Button } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { studyApi } from '@/api/studyApi';

interface IProps{
  memberId: number;
  studyId: number;
}

const BoardButton = ({memberId, studyId}: IProps) => {
  const [size, setSize] = useState<SizeType>('middle'); // default is 'middle'
  const [acceptStudy] = studyApi.useAcceptStudyMutation()
  const [refuseStudy] = studyApi.useRefuseStudyMutation()


  const handleStudyInviteAccept = async (memberId:number, studyId:number) => {
    console.log('accept');
    
    // await acceptStudy({"memberId":memberId, "studyId":studyId})
  }

  const handleStudyInviteRefuse = async (memberId:number, studyId:number) => {
    console.log('refuse');
    // await refuseStudy({"memberId":memberId, "studyId":studyId})
  }
  return (
        <S.ButtonWrapper>
          <Button type="primary" size={size} onClick={() => handleStudyInviteAccept(memberId, studyId)}>
            승낙
          </Button>
          <Button type="primary" size={size} onClick={() => handleStudyInviteRefuse(memberId, studyId)}>
            거절
          </Button>
        </S.ButtonWrapper>
)};

export default BoardButton;