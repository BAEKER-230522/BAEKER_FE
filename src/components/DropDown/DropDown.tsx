import { S } from "./styled";
import { useSelector } from "react-redux";
// import { useDropDownControl } from "@/hooks/useDropDownControl";
const DropDown = ({ type }: { type: "rank" | "menu" }) => {
  const styledProp = type === "rank" ? 0 : 1;
  const dropdownState = useSelector((state: any) => {
    return state.dropdown.dropdownState;
  });

  // const { dropdownRef } = useDropDownControl();
  const info = {
    rank: {
      items: [
        { name: "알고리즘 랭킹", link: "algoRank" },
        { name: "스터디 랭킹", link: "studyRank" },
      ],
    },
    menu: {
      items: [
        { name: "내 스터디", link: "myStudy" },
        { name: "스터디 만들기", link: "createStudy" },
        { name: "로그아웃", link: "logout" },
      ],
    },
  };

  return (
    <S.Position>
      <S.Container dropdownState={dropdownState} styledProp={styledProp}>
        {info[type].items.map((e) => (
          <S.Item key={e.name}>{e.name}</S.Item>
        ))}
      </S.Container>
    </S.Position>
  );
};

export default DropDown;
