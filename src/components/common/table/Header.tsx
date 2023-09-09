import { S } from "./style";

interface IHeaderProps {
  widthRatio: number[];
  category: any;
}

const Header = ({ widthRatio, category }: IHeaderProps) => {
  const ratioSum = widthRatio?.reduce((a, b) => a + b, 0);
  const ratio = Math.floor(100 / ratioSum!);
  const target_nth = widthRatio?.findIndex((e) => e !== 1);
  return (
    <S.HeaderContainer target_nth={target_nth!} ratio={ratio!}>
      {category?.map((e: any) => (
        <div key={e}>{e[0]}</div>
      ))}
    </S.HeaderContainer>
  );
};

export default Header;
