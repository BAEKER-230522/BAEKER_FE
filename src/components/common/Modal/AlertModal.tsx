import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useRouter } from "next/router";
import { ruleApi } from '@/api/ruleApi';

interface IProps {
  title: string;
  text : string;
  id : number;
}

const AlertModal = ({title, text, id}: IProps) => {
  const [deleteRule, {isLoading:deleteLoading}] = ruleApi.useDeleteRuleMutation();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const router = useRouter()
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async() => {
    try{
      setModalText('삭제 중입니다');
      setConfirmLoading(true);
      await deleteRule(id)
    }catch(err){
      console.log(err);
    }finally{
      setConfirmLoading(false)
      router.push({pathname:"/rule/list"})
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
      <Modal
        title={title}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{text}</p>
      </Modal>
    </>
  );
};

export default AlertModal;