import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useRouter } from "next/router";
import { studyApi } from "@/api/studyApi";
import { toast } from "react-toastify";

interface IProps {
  data: any;
  title: string;
  text: string;
  type: string;
  backId?: number;
  children: string;
  buttonText: string;
}

const AlertModal = ({ title, text, data, type, backId, buttonText }: IProps) => {
  const [deleteMission] = studyApi.useDeleteStudyMissionMutation();
  const [quitStudy] = studyApi.useResignStudyMutation();
  const [deleteStudy] = studyApi.useDeleteStudyMutation();
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
        await deleteMission(data);
      }
      if (type === "study") {
        await quitStudy(data);
      }
      if (type === "delete") {
        await deleteStudy(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      toast(title);
      setConfirmLoading(false);
      if (type === "mission") {
        router.push({ pathname: `/study/${backId}` });
      } else {
        router.push({ pathname: `/profile` });
      }
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {buttonText}
      </Button>
      <Modal title={title} open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
        <p>{text}</p>
      </Modal>
    </>
  );
};

export default AlertModal;
