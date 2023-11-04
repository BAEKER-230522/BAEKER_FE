import { useState } from "react";
import { codeReviewApi } from "@/api/codeReviewApi";
import { S } from "./style";
import { toast } from "react-toastify";
import Image from "next/image";

interface IComment {
  commentId: number;
  content: string;
  memberId: string;
}

const Reply = ({ codeData, setCommentUpdate }: any) => {
  const [postComment] = codeReviewApi.usePostCommentMutation();
  const [commentValue, setCommentValue] = useState<string>();
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(e.target.value);
  };

  const postCommentHandler = () => {
    postComment({ postId: codeData.postId, content: commentValue })
      .unwrap()
      .then(() => {
        toast("댓글 등록 완료");
        setCommentUpdate((prev: boolean) => !prev);
      })
      .catch(() => toast("댓글 등록 실패"));
    setCommentValue("");
  };

  return (
    <S.ReplySection>
      <S.ReplyList>
        {codeData.comments.map((comment: IComment, idx: number) => (
          <S.Reply key={idx}>
            <S.ReplyUserInfo>
              <Image style={{ borderRadius: "50%" }} src="/study.png" width={40} height={40} alt="이미지" />
              정도임당
            </S.ReplyUserInfo>
            {comment.content}
          </S.Reply>
        ))}
      </S.ReplyList>
      <S.ReplyInput placeholder="댓글을 남겨주세요." value={commentValue} onChange={onChange}></S.ReplyInput>
      <S.Button style={{ marginLeft: "auto", marginTop: "10px" }} onClick={postCommentHandler}>
        입력
      </S.Button>
    </S.ReplySection>
  );
};

export default Reply;
