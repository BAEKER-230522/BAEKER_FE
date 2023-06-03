import { useState } from "react";
import { S } from "./styled";
import DropDown from "../DropDown/DropDown";
import { useOncClickIcon } from "@/hooks/useOnClickIcon";
import { useDropDownControl } from "@/hooks/useDropDownControl";
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
