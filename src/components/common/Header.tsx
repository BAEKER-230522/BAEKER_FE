import { S } from "./style";
import DropDown from "@/components/Dropdown/index";
import { useOncClickIcon } from "@/hooks/useOnClickIcon";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const { dropdownState, changeDropdownState } = useOncClickIcon();
  const isLogin = useSelector((state:any) => {return state.user.isLogin})
  
  return (
    <S.HeaderContainer>
      <Link href="/" legacyBehavior>
        <S.Logo>BAEKER</S.Logo>
      </Link>
      <S.IconContainer>
        <S.DropDownIcon onClick={() => changeDropdownState(0)}>
          {dropdownState[0] === 1 && <DropDown type={"rank"} />}
        </S.DropDownIcon>
        {isLogin &&
          <S.DropDownIcon onClick={() => changeDropdownState(1)}>
            {dropdownState[1] === 1 && <DropDown type={"menu"} />}
          </S.DropDownIcon>
        }
      </S.IconContainer>
    </S.HeaderContainer>
  );
};

export default Header;
