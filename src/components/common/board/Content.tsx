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
    title: "12",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "3/5",
    host: "방장",
    status: "상태",
  },
  {
    title: "study",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "4/5",
    host: "방장",
    status: "123",
  },
  {
    title: "32",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "2/5",
    host: "방장",
    status: "4521",
  },
  {
    title: "2",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "2/5",
    host: "방장",
    status: "5123",
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
    intro: " ipsum dolor sit amet consectetur",
    members: "3/5",
    host: "방장",
    status: "상태",
  },
  {
    title: "study",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "4/5",
    host: "방장",
    status: "123",
  },
  {
    title: "4",
    intro: " sit amet consectetur",
    members: "1/5",
    host: "방장",
    status: "4521",
  },
  {
    title: "5",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "2/5",
    host: "방장",
    status: "51231234",
  },
  {
    title: "6",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "2/5",
    host: "방장",
    status: "상태",
  },
  {
    title: "study",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "3/5",
    host: "방장",
    status: "상태",
  },
  {
    title: "3",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "4/5",
    host: "방장",
    status: "123",
  },
  {
    title: "study",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "2/5",
    host: "방장",
    status: "4521",
  },
  {
    title: "12",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "2/5",
    host: "방장",
    status: "5123",
  },
  {
    title: "32",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "2/5",
    host: "방장",
    status: "상태",
  },
  {
    title: "13",
    intro: " ipsum dolor sit amet consectetur",
    members: "3/5",
    host: "방장",
    status: "상태",
  },
  {
    title: "6",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "4/5",
    host: "방장",
    status: "123",
  },
  {
    title: "study",
    intro: " sit amet consectetur",
    members: "1/5",
    host: "방장",
    status: "4521",
  },
  {
    title: "study",
    intro: "Lorem, ipsum dolor sit amet consectetur",
    members: "2/5",
    host: "방장",
    status: "51231234",
  },
];

const Content = ({ target_nth, ratio, crntPage }: IBoard) => {
  const test = mock.slice(crntPage! * 5, crntPage! * 5 + 5);

  return (
    <S.ContentContainer>
      {test.map((e, idx) => (
        <S.ContentWrapper key={idx} target_nth={target_nth!} ratio={ratio!}>
          <div>{e.title}</div>
          <div>{e.intro}</div>
          <div>{e.members}</div>
          <div>{e.host}</div>
          <div>{e.status}</div>
        </S.ContentWrapper>
      ))}
    </S.ContentContainer>
  );
};

export default Content;
