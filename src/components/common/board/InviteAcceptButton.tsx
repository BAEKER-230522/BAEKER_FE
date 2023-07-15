import React, { useState } from 'react';
import { S } from './style';
import { Button } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { studyApi } from '@/api/studyApi';
import { toast } from 'react-toastify';

interface IProps{
  memberId: number;
  studyId: number;
}

const InviteAcceptButton = ({memberId, studyId}: IProps) => {
  const [size, setSize] = useState<SizeType>('middle'); // default is 'middle'
  const [acceptStudy] = studyApi.useAcceptStudyMutation()
  const [refuseStudy] = studyApi.useRefuseStudyMutation()


  const handleStudyInviteAccept = async (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>, memberId:number, studyId:number) => {
    e.stopPropagation()
    try{
      toast('가입 승인')
      await acceptStudy({"memberId":memberId, "studyId":studyId})
    }catch(err){
      console.log(err); 
    }
  }

  const handleStudyInviteRefuse = async (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>, memberId:number, studyId:number) => {
    e.stopPropagation()
    try{
      toast('가입 거절')
      await refuseStudy({"memberId":memberId, "studyId":studyId})
    }catch(err){
      console.log(err); 
    }
  }

  return (
        <S.ButtonWrapper>
          <Button type="primary" size={size} onClick={(e) => handleStudyInviteAccept(e, memberId, studyId)}>
            승낙
          </Button>
          <Button type="primary" size={size} onClick={(e) => handleStudyInviteRefuse(e, memberId, studyId)}>
            거절
          </Button>
        </S.ButtonWrapper>
)};

export default InviteAcceptButton;