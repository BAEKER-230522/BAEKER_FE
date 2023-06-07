import { S } from "./styled";
import { IBoard } from "./Board";

// get api로 데이터 받기.
const mock = [
  {
    title: "study",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "2/5",
    host: "방장",
    status: "상태",
  },
  {
    title: "study",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "2/5",
    host: "방장",
    status: "상태",
  },
  {
    title: "study",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "2/5",
    host: "방장",
    status: "상태",
  },
  {
    title: "study",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "2/5",
    host: "방장",
    status: "상태",
  },
  {
    title: "study",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "2/5",
    host: "방장",
    status: "상태",
  },
];

const Content = ({ target_nth, ratio }: IBoard) => {
  return (
    <S.ContentContainer>
      {mock.map((e, idx) => (
        <S.ContentWrapper key={idx} target_nth={target_nth!} ratio={ratio!}>
          <div>스터디</div>
          <div>Lorem, ipsum dolor sit amet consectetur</div>
          <div>인원</div>
          <div>스터디장</div>
          <div>상태</div>
        </S.ContentWrapper>
      ))}
    </S.ContentContainer>
  );
};

export default Content;
