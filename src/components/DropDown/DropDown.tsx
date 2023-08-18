import { S } from "./style";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import LocalStorage from "@/util/localstorage";
import { useDispatch } from "react-redux";
import { MouseEvent } from 'react';
import { logout } from "@/store/modules/user";
const DropDown = ({ type }: { type: "rank" | "menu" }) => {
  const dispatch = useDispatch()
  const styledProp = type === "rank" ? 0 : 1;
  const dropdownState = useSelector((state: any) => {
    return state.dropdown.dropdownState;
  });

  const info = {
    rank: {
      items: [
        { name: "알고리즘 랭킹", link: "rank/algorithm" },
        { name: "스터디 랭킹", link: "rank/study" },
      ],
    },
    menu: {
      items: [
        { name: "마이페이지", link: "profile" },
        { name: "스터디 만들기", link: "study/manage" },
        { name: "규칙", link: "/rule" },
        { name: "로그아웃", link: "logout" },
      ],
    },
  };

  const router = useRouter();
  const handleLogout = (event:MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(logout());
    LocalStorage.removeItem('refreshToken');
    LocalStorage.removeItem('memberId');
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'baekJoonConnect=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'memberId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
    router.push('/');
  };


  return (
    <S.Position>
      <S.Container dropdownState={dropdownState} styledProp={styledProp}>
        {info[type].items.map((e) => {
          if (e.name === "로그아웃") {
            return (
              <S.Item key={e.name} onClick={handleLogout}>{e.name}</S.Item>
            );
          } else {
            return (
              <Link key={e.name} href={`/${e.link}`} legacyBehavior>
                <S.Item>{e.name}</S.Item>
              </Link>
            );
          }
        })}
      </S.Container>
    </S.Position>
  );
};

export default DropDown;
