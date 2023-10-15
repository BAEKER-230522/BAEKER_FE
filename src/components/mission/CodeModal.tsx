import { useRef, useState } from "react";
import { S } from "./style";
import HighlightCode from "./HighlightCode";
import useOutsideClick from "@/hooks/mission/useOutsideClick";

interface IProps {
  isInitCodeModal: boolean;
  setIsInitCodeModal: React.Dispatch<React.SetStateAction<boolean>>;
  isCodeModalOpened: boolean;
  setIsCodeModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const MissionCodeModal = ({ isInitCodeModal, setIsInitCodeModal, isCodeModalOpened, setIsCodeModalOpened }: IProps) => {
  const codeModalRef = useRef<HTMLDivElement>(null);
  const [showHighlighter, setShowHighlighter] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");
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

  return (
    <S.CodeModalContainer>
      <S.CodeModal ref={codeModalRef}>
        <S.StatusWrapper>
          <S.EditorStatusButton onClick={() => HighlighterHandler(false)}>입력</S.EditorStatusButton>
          <S.EditorStatusButton onClick={() => HighlighterHandler(true)}>미리보기</S.EditorStatusButton>
        </S.StatusWrapper>
        <S.CodeTextArea status={showHighlighter} placeholder="입력" onChange={codeHandler} />
        <HighlightCode content={code} status={showHighlighter} language="javascript" />
        <S.ButtonWrapper>
          <S.Button>코드 등록</S.Button>
          <S.Button onClick={codeModalHandler}>닫기</S.Button>
        </S.ButtonWrapper>
      </S.CodeModal>
    </S.CodeModalContainer>
  );
};

export default MissionCodeModal;
