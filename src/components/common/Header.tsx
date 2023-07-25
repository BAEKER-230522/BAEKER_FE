import { S } from "./style";
import DropDown from "../Dropdown/Dropdown";
import { useOncClickIcon } from "@/hooks/useOnClickIcon";
import Link from "next/link";

const Header = () => {
  const { dropdownState, changeDropdownState } = useOncClickIcon();
  return (
    <S.HeaderContainer>
      <Link href="/" legacyBehavior>
        <S.Logo>BAEKER</S.Logo>
      </Link>
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
