import { S } from "./style";
import Reply from "./Reply";
import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import useOutsideClick from "@/hooks/mission/useOutsideClick";
import Loading from "../common/loading/Loading";
import instance from "@/api/instance";
import { IProblemStatus } from "./MemberSolvingStatus";
import { codeReviewApi } from "@/api/codeReviewApi";
hljs.registerLanguage("javascript", javascript);

interface IProps {
  isInitCodeReviewModal: boolean;
  problemInfo: IProblemStatus;
  isCodeReviewModalOpen: boolean;
  setIsInitCodeReviewModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCodeReviewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReviewModal = ({
  isInitCodeReviewModal,
  problemInfo,
  isCodeReviewModalOpen,
  setIsInitCodeReviewModal,
  setIsCodeReviewModalOpen,
}: IProps) => {
  console.log(problemInfo.id);

  // const { data } = codeReviewApi.useGetCodeReviewQuery(problemInfo.id)
  const [codeData, setCodeData] = useState<any>();
  const [commentUpdate, setCommentUpdate] = useState<boolean>(false);
  const getCode = async () => {
    await instance
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}pub/comm/web/post/v1/problem-status/${problemInfo.id}`)
      .then((data) => setCodeData(data.data.data));
  };

  useEffect(() => {
    getCode();
  }, [commentUpdate]);
  console.log(codeData);

  const codeModalRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: codeModalRef,
    isInit: isInitCodeReviewModal,
    setIsInit: setIsInitCodeReviewModal,
    isOpened: isCodeReviewModalOpen,
    setIsOpened: setIsCodeReviewModalOpen,
  });

  const language = "typescript";
  const myHtml = codeData
    ? hljs.highlight(`${codeData.content}`, { language }).value
    : hljs.highlight("", { language }).value;
  useEffect(() => {
    hljs.highlightAll();
  }, [codeData]);
  if (codeData === undefined) {
    return (
      <S.CodeModalContainer>
        <S.ReviewModal ref={codeModalRef}>
          <S.CodeReviewModalTop></S.CodeReviewModalTop>
          <S.CodeReviewModalBody>
            <S.CodeSection>
              <Loading />
              <S.CodeHighlightBackground />
            </S.CodeSection>
          </S.CodeReviewModalBody>
        </S.ReviewModal>
      </S.CodeModalContainer>
    );
  }
  return (
    <S.CodeModalContainer>
      <S.ReviewModal ref={codeModalRef}>
        <S.CodeReviewModalTop>문제 제목 : {codeData.title}</S.CodeReviewModalTop>
        <S.CodeReviewModalBody>
          <S.CodeSection>
            <S.CodeHighlight>
              <pre>
                <code dangerouslySetInnerHTML={{ __html: myHtml }} />
              </pre>
            </S.CodeHighlight>
            <S.CodeHighlightBackground />
          </S.CodeSection>

          <Reply codeData={codeData} setCommentUpdate={setCommentUpdate} />
        </S.CodeReviewModalBody>
      </S.ReviewModal>
    </S.CodeModalContainer>
  );
};

export default ReviewModal;
