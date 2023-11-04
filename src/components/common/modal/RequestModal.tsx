import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useRouter } from "next/router";
import { studyApi } from "@/api/studyApi";
import { Input } from "antd";
import { toast } from "react-toastify";

interface IProps {
  memberId: number | null;
  studyId: string;
}

const { TextArea } = Input;
const RequestModal = ({ memberId, studyId }: IProps) => {
  const [message, setMessage] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [handleJoinStudy] = studyApi.useJoinStudyMutation();
  const showModal = () => {
    setOpen(true);
  };
  // 스터디 가입

  const handleOk = async () => {
    try {
      setConfirmLoading(true);
      await handleJoinStudy({
        study: Number(studyId),
        member: memberId,
        msg: message,
      })
        .unwrap()
        .then(() => toast("스터디 가입 신청 완료"))
        .catch(() => toast("스터디 가입 신청 실패"));
      setMessage("");
      setOpen(false);
    } catch (err) {
      console.log(err);
    } finally {
      setConfirmLoading(false);
    }
  };

  const handleCancel = () => {
    setMessage("");
    setOpen(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        스터디 가입하기
      </Button>
      <Modal title={"가입 메세지"} open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
        <TextArea
          style={{ height: 150, resize: "none" }}
          showCount
          maxLength={100}
          onChange={onChange}
          value={message}
          placeholder="가입 메세지"
        />
      </Modal>
    </>
  );
};

export default RequestModal;
