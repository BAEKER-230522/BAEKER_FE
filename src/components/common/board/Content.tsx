import { S } from "./styled";
import { IBoard } from "./Board";
import { useRouter } from "next/router";

// get api로 데이터 받기.

interface IContentProps{
  target_nth?: number;
  ratio?: number;
  crntPage?: number; 
  data: any;
  type:string;
  category: string[];
}

const Content = ({ target_nth, ratio, crntPage, data, type, category }: IContentProps) => {
  
  const test = data.slice(crntPage! * 5, crntPage! * 5 + 5);
  const router = useRouter()
  
  return (
    <S.ContentContainer >
      {test.map((e:any, idx:number) => (
        <S.ContentWrapper key={idx} target_nth={target_nth!} ratio={ratio!} onClick={() => {router.push({pathname:`/${type}/${e.id}`})}}>
          {category.map((elem, idx) => (
            <div>{e[elem[1]]}</div>
          ))}
        </S.ContentWrapper>
      ))}
    </S.ContentContainer>
  );
};

export default Content;
