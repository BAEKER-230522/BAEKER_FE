import { S } from "./style";
import { IBoard } from "./Board";
import { useRouter } from "next/router";
import BoardButton from "./Button";
import { USER_NUMBER } from "@/util/constant";
// get api로 데이터 받기.

interface IContentProps{
  target_nth?: number;
  ratio?: number;
  crntPage?: number; 
  data: any;
  type:string;
  category: string[];
}

const RequestStatus = ({status}:{status:string}) => {  
  return status === "ok" ? <div>가입 완료</div> : <div>대기</div>
}

const Content = ({ target_nth, ratio, crntPage, data, type, category }: IContentProps) => {
  const test = data.slice(crntPage! * 5, crntPage! * 5 + 5);
  const router = useRouter()
  const {detail: param} = router.query; 
  const paramAsNumber = Number(param);


  return (
    <S.ContentContainer >
      {test.map((e:any, idx:number) => (
        <S.ContentWrapper key={idx} target_nth={target_nth!} ratio={ratio!} onClick={() => {router.push({pathname:`/${type}/${e.id}`})}}>
          {category.map((elem, idx) => 
            (elem[1] === "request" ? <RequestStatus status={"pending"} key={idx}/> : elem[1] === "invite" ? <BoardButton memberId={e.id} studyId={paramAsNumber} key={idx}/> : <div key={idx}>{e[elem[1]]}</div>)
          )}
        </S.ContentWrapper>
      ))}
    </S.ContentContainer>
  );
};

export default Content;
