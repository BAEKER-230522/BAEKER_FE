import { S } from "./style";
import { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import LocalStorage from "@/util/localstorage";
import { logout, login } from "@/store/modules/user";
import Toggle from "../toggle";
import Search from "./search/search";
import DropwDown from "./DropDown";

const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state: any) => state.user.isLogin);
  useEffect(() => {
    const refreshToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("refreshToken="))
      ?.split("=")[1];
    if (!!refreshToken) {
      dispatch(login());
    } else {
      LocalStorage.removeItem("memberId");
      dispatch(logout());
    }
  }, []);

  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <Link href="/">
          <S.Logo>BAEKER</S.Logo>
        </Link>
      </S.LogoContainer>
      <Search />
      <S.IconContainer>
        <Toggle />
        <DropwDown
          text="랭킹"
          element={[
            { text: "스터디 랭킹", type: "router", url: "/rank/study" },
            { text: "개인 랭킹", type: "router", url: "/rank/algorithm" },
          ]}
        />
        {isLogin && (
          <DropwDown
            text="메뉴"
            element={[
              { text: "마이페이지", type: "router", url: "/profile" },
              { text: "스터디만들기", type: "router", url: "/study/manage" },
              { text: "로그아웃", type: "signout" },
            ]}
          />
        )}
      </S.IconContainer>
    </S.HeaderContainer>
  );
};

export default Header;
