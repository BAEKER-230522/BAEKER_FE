import { S } from "./style";

interface IHeaderProps {
  category?: string[];
  target_nth?: number;
  ratio: number;
}

const Header = ({ category, target_nth, ratio }: IHeaderProps) => {
  return (
    <S.HeaderContainer target_nth={target_nth!} ratio={ratio!}>
      {category?.map((e) => (
        <div key={e}>{e[0]}</div>
      ))}
    </S.HeaderContainer>
  );
};

export default Header;
