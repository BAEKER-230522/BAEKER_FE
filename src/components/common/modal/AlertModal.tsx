import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useRouter } from "next/router";
import { studyApi } from "@/api/studyApi";
import { toast } from "react-toastify";

interface IProps {
  title: string;
  text: string;
  id: number;
  type: string;
  backId?: number;
  children: string;
}

const AlertModal = ({ title, text, id, type, backId }: IProps) => {
  const [deleteMission, { isLoading: deleteMissionLoading }] = studyApi.useDeleteStudyMissionMutation();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const router = useRouter();
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    try {
      setModalText("삭제 중입니다");
      setConfirmLoading(true);
      if (type === "mission") {
        await deleteMission(id);
      }
    } catch (err) {
      console.log(err);
    } finally {
      toast("삭제 완료");
      setConfirmLoading(false);
      if (type === "mission") {
        router.push({ pathname: `/study/${backId}` });
      }
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        삭제하기
      </Button>
      <Modal title={title} open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
        <p>{text}</p>
      </Modal>
    </>
  );
};

export default AlertModal;
