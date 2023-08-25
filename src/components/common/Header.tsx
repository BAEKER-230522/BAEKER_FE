import { S } from "./style";
import { MouseEvent } from 'react';
import Link from "next/link";
import { useSelector } from "react-redux";
import type { MenuProps } from 'antd';
import { Button, Dropdown, ConfigProvider } from 'antd';
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import LocalStorage from "@/util/localstorage";
import { logout } from "@/store/modules/user";
import Toggle from "./toggle";

const Header = () => {
  const isLogin = useSelector((state:any) => {return state.user.isLogin})
  const dispatch = useDispatch();
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
  }

  

const items_1: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link href={`/rank/algorithm`} legacyBehavior>
        알고리즘 랭킹
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link href={`/rank/study`} legacyBehavior>
        스터디 랭킹
      </Link>
    ),
  },
];

const items_2: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link href={`/profile`} legacyBehavior>
        마이페이지
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link href={`/study/manage`} legacyBehavior>
        스터디 만들기
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link href={`/rule`} legacyBehavior>
        규칙
      </Link>
    ),
  },
  {
    key: '4',
    label: (
      <button onClick={handleLogout}>
        로그아웃
      </button>
    ),
  },
];

  
  return (
    <S.HeaderContainer>
      <Link href="/" legacyBehavior>
        <S.Logo>BAEKER</S.Logo>
      </Link>
      <S.IconContainer> 
        <Toggle/>
        <ConfigProvider theme={{
          token: {
              borderRadius: 7,
              colorTextBase: '#E1E1E1',
              colorBgContainer: '#1E1E1E',
              colorBorder: '#1E1E1E',
              colorPrimaryHover: '#E1E1E1',
            },
          }}
          >
          <Dropdown menu={{ items:items_1 }} placement="bottom">
            <Button>랭킹</Button>
          </Dropdown>
          {isLogin &&
            <Dropdown menu={{ items:items_2 }} placement="bottom">
              <Button>메뉴</Button>
            </Dropdown>
          }
        </ConfigProvider>
      </S.IconContainer>
      
    </S.HeaderContainer>
  );
};

export default Header;