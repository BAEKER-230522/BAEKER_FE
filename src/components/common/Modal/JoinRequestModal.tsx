import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useRouter } from "next/router";
import { studyApi } from '@/api/studyApi';
import Selector from '../selector';
import { Input } from 'antd';
import { toast } from 'react-toastify';
import Loading from '@/components/common/loading/Loading';
const { TextArea } = Input;


interface IProps {
  userId : number;
  id : number;
  name : string;
}

const JoinRequestModal = ({userId, id, name}: IProps) => {

  const [studyId, setId] = useState<number>(); 
  const [message, setMessage] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const router = useRouter()
  const {data: getStudyList, isLoading} = studyApi.useGetUserStudyListQuery({memberId:userId, status:1})
  const [handleInvite] = studyApi.useInviteStudyMutation()
  const showModal = () => {
    setOpen(true);
  };

  
  // 스터디 초대 

  const handleOk = async() => {
    try{
      setModalText('삭제 중입니다');
      setConfirmLoading(true);
      
      
      await handleInvite({'study':studyId, 'inviter':userId, 'invitee':id, 'msg':message})
      setMessage('')
      toast('스터디 초대 완료')
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

  if(isLoading) return (
    <>
      <Button type="primary" onClick={showModal}>
        스터디 초대하기
      </Button>
      <Modal
        title={`${name} 초대하기`}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        
      >
        <div style={{ display:'flex', flexDirection:'column'}}>
          <Loading/>
          <TextArea
            showCount
            maxLength={100}
            style={{ height: 150, width:300 }}
            onChange={onChange}
            value={message}
            placeholder="disable resize"
          />
        </div>
      </Modal>
    </>
  )
  return (
    <>
      <Button type="primary" onClick={showModal}>
        스터디 초대하기
      </Button>
      <Modal
        title={`${name} 초대하기`}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        
      >
        <div style={{ display:'flex', flexDirection:'column'}}>
          <Selector data={getStudyList.data} setId={setId}/>
          <TextArea
            showCount
            maxLength={100}
            style={{ height: 150, width:300 }}
            onChange={onChange}
            value={message}
            placeholder="disable resize"
          />
        </div>
      </Modal>
    </>
  );
};

export default JoinRequestModal;