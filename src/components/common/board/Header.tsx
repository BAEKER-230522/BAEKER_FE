import { S } from "./styled";
import { IBoard } from "./Board";

const Header = ({ category, target_nth, ratio }: IBoard) => {
  return (
    <S.HeaderContainer target_nth={target_nth!} ratio={ratio!}>
      {category?.map((e) => (
        <div key={e}>{e}</div>
      ))}
    </S.HeaderContainer>
  );
};

export default Header;
