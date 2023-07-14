import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useRouter } from "next/router";
import { studyApi } from '@/api/studyApi';
import { Input } from 'antd';
import { toast } from 'react-toastify';
import { USER_NUMBER } from '@/util/constant';

const { TextArea } = Input;

const RequestModal = () => {
  const [studyId, setStudyId] = useState<number>(); 
  const [message, setMessage] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const router = useRouter();
  const {detail: param} = router.query;
  const [handleJoinStudy] = studyApi.useJoinStudyMutation()
  const showModal = () => {
    setOpen(true);
  };
  // 스터디 가입 

  const handleOk = async() => {
    try{
      setConfirmLoading(true);      
      await handleJoinStudy({'study':Number(param), 'member':USER_NUMBER, 'msg':message})
      setMessage('')
      toast('스터디 가입 신청 완료')
      setOpen(false);

    }catch(err){
      console.log(err);
    }finally{
      setConfirmLoading(false)
    }
  };

  const handleCancel = () => {
    setMessage('')
    setOpen(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        스터디 가입하기
      </Button>
      <Modal
        title={'가입 메세지'}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <TextArea
          style={{ height: 150, resize: 'none' }}
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