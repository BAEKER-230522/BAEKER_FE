import { useRef, useState } from "react";
import { S } from "./style";
import HighlightCode from "./HighlightCode";
import useOutsideClick from "@/hooks/mission/useOutsideClick";
import { codeReviewApi } from "@/api/codeReviewApi";
import Loading from "../common/loading/Loading";
import { toast } from "react-toastify";
import { IProblemStatus } from "./MemberSolvingStatus";

interface IProps {
  isInitCodeModal: boolean;
  isCodeModalOpened: boolean;
  missionId: number;
  problemInfo: Partial<IProblemStatus>;
  studyId: number;
  setIsInitCodeModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCodeModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUpdateLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const MissionCodeModal = ({
  isInitCodeModal,
  isCodeModalOpened,
  missionId,
  problemInfo,
  studyId,
  setIsCodeModalOpened,
  setIsInitCodeModal,
  setIsUpdateLoading,
}: IProps) => {
  const codeModalRef = useRef<HTMLDivElement>(null);
  const [showHighlighter, setShowHighlighter] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");
  const [uploadCode] = codeReviewApi.useCreateCodeReviewMutation();

  useOutsideClick({
    ref: codeModalRef,
    isInit: isInitCodeModal,
    setIsInit: setIsInitCodeModal,
    isOpened: isCodeModalOpened,
    setIsOpened: setIsCodeModalOpened,
  });
  const codeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };
  const HighlighterHandler = (status: boolean) => {
    setShowHighlighter(status);
  };

  const codeModalHandler = () => {
    setIsInitCodeModal(false);
    setIsCodeModalOpened(false);
  };

  const codeUploadHandler = async () => {
    try {
      uploadCode({
        studyId,
        missionId: missionId,
        problemStatusId: problemInfo.id,
        title: problemInfo.title,
        content: code,
      })
        .unwrap()
        .then(() => setIsUpdateLoading((prev: boolean) => !prev))
        .then(() => toast("코드 등록 완료"))
        .catch(() => toast("코드 등록 실패"));
    } catch (err) {
      console.log(err);
    } finally {
      setIsCodeModalOpened(false);
      setIsInitCodeModal(false);
    }
  };
  return (
    <S.CodeModalContainer>
      <S.CodeModal ref={codeModalRef}>
        <S.StatusWrapper>
          <S.EditorStatusButton onClick={() => HighlighterHandler(false)}>입력</S.EditorStatusButton>
          <S.EditorStatusButton onClick={() => HighlighterHandler(true)}>미리보기</S.EditorStatusButton>
        </S.StatusWrapper>
        <>
          <S.CodeTextArea status={showHighlighter} placeholder="입력" onChange={codeHandler} />
          <HighlightCode content={code} status={showHighlighter} language="javascript" />
        </>
        <S.ButtonWrapper>
          <S.Button onClick={codeUploadHandler}>코드 등록</S.Button>
          <S.Button onClick={codeModalHandler}>닫기</S.Button>
        </S.ButtonWrapper>
      </S.CodeModal>
    </S.CodeModalContainer>
  );
};

export default MissionCodeModal;
