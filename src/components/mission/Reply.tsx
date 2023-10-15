import { S } from "./style";

const Reply = () => {
  return (
    <S.ReplySection>
      <S.ReplyList>
        <div>test1</div>
        <div>test2</div>
      </S.ReplyList>
      <S.ReplyInput placeholder="댓글을 남겨주세요."></S.ReplyInput>
    </S.ReplySection>
  );
};

export default Reply;
