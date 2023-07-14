import { S } from "./style";
import { useSelector } from "react-redux";
import Link from "next/link";
const DropDown = ({ type }: { type: "rank" | "menu" }) => {
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
        { name: "로그아웃", link: "logout" },
      ],
    },
  };

  return (
    <S.Position>
      <S.Container dropdownState={dropdownState} styledProp={styledProp}>
        {info[type].items.map((e) => (
          <Link key={e.name} href={`/${e.link}`} legacyBehavior>
            <S.Item>{e.name}</S.Item>
          </Link>
        ))}
      </S.Container>
    </S.Position>
  );
};

export default DropDown;
