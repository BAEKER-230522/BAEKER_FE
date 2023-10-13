import { useRef, useState } from "react";
import { S } from "./style";
import HighlightCode from "./HighlightCode";
import useOutsideClick from "@/hooks/mission/useOutsideClick";

interface IProps {
  showCodeModal: boolean;
  setShowCodeModal: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpened: boolean;
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const MissionCodeModal = ({ showCodeModal, setShowCodeModal, isModalOpened, setIsModalOpened }: IProps) => {
  const codeModalRef = useRef<HTMLDivElement>(null);
  const [showHighlighter, setShowHighlighter] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");
  useOutsideClick({
    ref: codeModalRef,
    isFocus: showCodeModal,
    setFocus: setShowCodeModal,
    isOpened: isModalOpened,
    setIsOpened: setIsModalOpened,
  });
  const codeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };
  const HighlighterHandler = (status: boolean) => {
    setShowHighlighter(status);
  };

  const codeModalHandler = () => {
    setShowCodeModal(false);
    setIsModalOpened(false);
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
