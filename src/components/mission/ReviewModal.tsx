import { S } from "./style";
import Reply from "./Reply";
import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import useOutsideClick from "@/hooks/mission/useOutsideClick";
hljs.registerLanguage("javascript", javascript);

interface IProps {
  isInitCodeReviewModal: boolean;
  setIsInitCodeReviewModal: React.Dispatch<React.SetStateAction<boolean>>;
  isCodeReviewModalOpen: boolean;
  setIsCodeReviewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReviewModal = ({
  isInitCodeReviewModal,
  setIsInitCodeReviewModal,
  isCodeReviewModalOpen,
  setIsCodeReviewModalOpen,
}: IProps) => {
  const codeModalRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: codeModalRef,
    isInit: isInitCodeReviewModal,
    setIsInit: setIsInitCodeReviewModal,
    isOpened: isCodeReviewModalOpen,
    setIsOpened: setIsCodeReviewModalOpen,
  });
  const content = `
  import React, { useEffect } from "react";
  import hljs from "highlight.js";
  import javascript from "highlight.js/lib/languages/javascript";
  hljs.registerLanguage("javascript", javascript);
  import { S } from "./style";
  // Import a theme from the package
  
  interface Props {
    content: string;
    status: boolean;
    language: "javascript" | "java" | "python";
  }
  
  const HighlightCode = ({ content, status, language }: Props) => {
    const myHtml = hljs.highlight(content, { language }).value;
    useEffect(() => {
      hljs.highlightAll();
    }, []);
  
    return (
      <S.CodeHighlighterContainer status={status}>
        <pre>
          <code dangerouslySetInnerHTML={{ __html: myHtml }} />
        </pre>
      </S.CodeHighlighterContainer>
    );
  };
  
  export default HighlightCode;
  import React, { useEffect } from "react";
  import hljs from "highlight.js";
  import javascript from "highlight.js/lib/languages/javascript";
  hljs.registerLanguage("javascript", javascript);
  import { S } from "./style";
  // Import a theme from the package
  
  interface Props {
    content: string;
    status: boolean;
    language: "javascript" | "java" | "python";
  }
  
  const HighlightCode = ({ content, status, language }: Props) => {
    const myHtml = hljs.highlight(content, { language }).value;
    useEffect(() => {
      hljs.highlightAll();
    }, []);
  
    return (
      <S.CodeHighlighterContainer status={status}>
        <pre>
          <code dangerouslySetInnerHTML={{ __html: myHtml }} />
        </pre>
      </S.CodeHighlighterContainer>
    );
  };
  
  export default HighlightCode;
    
`;
  const language = "typescript";
  const myHtml = hljs.highlight(content, { language }).value;
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <S.CodeModalContainer>
      <S.ReviewModal ref={codeModalRef}>
        <S.CodeReviewModalTop>X</S.CodeReviewModalTop>
        <S.CodeReviewModalBody>
          <S.CodeSection>
            <pre>
              <code dangerouslySetInnerHTML={{ __html: myHtml }} />
            </pre>
          </S.CodeSection>
          <Reply />
        </S.CodeReviewModalBody>
      </S.ReviewModal>
    </S.CodeModalContainer>
  );
};

export default ReviewModal;
