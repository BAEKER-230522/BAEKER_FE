import React, { useState } from "react";
import { S } from "../table/ui/style";
import { Button } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { studyApi } from "@/api/studyApi";
import { toast } from "react-toastify";

interface IProps {
  memberId: number;
  studyId: number;
}

const InviteAcceptButton = ({ memberId, studyId }: IProps) => {
  const [size, setSize] = useState<SizeType>("middle"); // default is 'middle'
  const [acceptStudy] = studyApi.useAcceptStudyMutation();
  const [refuseStudy] = studyApi.useRefuseStudyMutation();

  const handleStudyInviteAccept = async (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>,
    memberId: number,
    studyId: number
  ) => {
    e.stopPropagation();
    try {
      await acceptStudy({ memberId: memberId, studyId: studyId })
        .unwrap()
        .then(() => toast("가입 승인"))
        .catch(() => toast("가입 승인 실패"));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStudyInviteRefuse = async (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>,
    memberId: number,
    studyId: number
  ) => {
    e.stopPropagation();
    try {
      await refuseStudy({ memberId: memberId, studyId: studyId })
        .unwrap()
        .then(() => toast("가입 거절"))
        .catch(() => toast("가입 거절 실패"));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.ButtonWrapper>
      <Button type="primary" size={size} onClick={(e) => handleStudyInviteAccept(e, memberId, studyId)}>
        승낙
      </Button>
      <Button type="primary" size={size} onClick={(e) => handleStudyInviteRefuse(e, memberId, studyId)}>
        거절
      </Button>
    </S.ButtonWrapper>
  );
};

export default InviteAcceptButton;
