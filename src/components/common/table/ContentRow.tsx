import { S } from "./style";

interface IContentRow {
  widthRatio: number[];
  onClickMethod?: () => void;
  children: (item: any, index: number) => React.ReactNode;
  idx: number;
  item: any;
  category: any;
}

const ContentRow = ({ idx, widthRatio, onClickMethod, children, item, category }: IContentRow) => {
  console.log(item);
  const ratioSum = widthRatio?.reduce((a, b) => a + b, 0);
  const ratio = Math.floor(100 / ratioSum!);
  const target_nth = widthRatio?.findIndex((e) => e !== 1);

  return (
    <S.ContentWrapper key={idx} target_nth={target_nth!} ratio={ratio!} onClick={onClickMethod}>
      {category.map((e: any, inner_idx: number) => {
        return children(e, inner_idx);
      })}
    </S.ContentWrapper>
  );
};

export default ContentRow;
