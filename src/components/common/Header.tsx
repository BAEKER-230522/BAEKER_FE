import { S } from "./styled";
import DropDown from "../dropdown/DropDown";
import { useOncClickIcon } from "@/hooks/useOnClickIcon";

const Header = () => {
  const { dropdownState, changeDropdownState } = useOncClickIcon();
  return (
    <S.HeaderContainer>
      <S.Logo>BAEKER</S.Logo>
      <S.IconContainer>
        <S.DropDownIcon onClick={() => changeDropdownState(0)}>
          {dropdownState[0] === 1 && <DropDown type={"rank"} />}
        </S.DropDownIcon>
        <S.DropDownIcon onClick={() => changeDropdownState(1)}>
          {dropdownState[1] === 1 && <DropDown type={"menu"} />}
        </S.DropDownIcon>
      </S.IconContainer>
    </S.HeaderContainer>
  );
};

export default Header;
