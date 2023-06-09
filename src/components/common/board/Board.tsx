import { S } from "./style";
import Header from "./Header";
import Content from "./Content";
import Pagination from "./Pagination";
import { usePagination } from "@/hooks/usePagination";
import EmptyList from "@/components/EmptyList/EmptyList";

export interface IBoard {
  category?: any;
  target_nth?: number;
  ratio?: number;
  widthRatio?: number[];
  crntPage?: number;  
  data: any;
  type:string;
}

const Board = ({ category, widthRatio, data, type}: IBoard) => {  
  const ratioSum = widthRatio?.reduce((a, b) => a + b, 0);
  const ratio = Math.floor(100 / ratioSum!);
  const target_nth = widthRatio?.findIndex((e) => e !== 1);
  const _test = Array.from({ length: Math.floor((data?.length)/5)+1 }, (_, idx: number) => idx + 1);
  const { crntPage, onClickNext, onClickPrev, crntPageArray, onClickPage } = usePagination(_test!);
  
  if(data.length === 0) return <EmptyList/>
  
  return ( 
    <S.Container>
      <Header category={category} target_nth={target_nth} ratio={ratio} />
      <Content target_nth={target_nth} ratio={ratio} crntPage={crntPage} data={data} type={type} category={category}/>
      <Pagination
        onClickNext={onClickNext}
        onClickPrev={onClickPrev}
        crntPageArray={crntPageArray}
        onClickPage={onClickPage}
        crntPage={crntPage}
      />
    </S.Container>
  );
};

export default Board;
