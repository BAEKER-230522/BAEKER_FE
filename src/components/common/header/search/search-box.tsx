import styled from "styled-components";
import Loading from "../../loading/Loading";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { themedPalette } from "@/styles/theme";
import useOutsideClick from "./useOutsideClick";

interface IMember {
  nickname: string;
  id: number;
  ranking: number;
  profileImg: string;
}

interface IStudy {
  id: number;
  name: string;
}

interface IResult {
  members: IMember[];
  studies: IStudy[];
}

interface IProp {
  searchResult: IResult;
  isLoading: boolean;
  setInputFocused: React.Dispatch<React.SetStateAction<boolean>>;
  focus: boolean;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox = ({ searchResult, isLoading, setInputFocused, focus, setSearchValue }: IProp) => {
  const formRef = useRef<HTMLDivElement>(null);
  useOutsideClick({ ref: formRef, isFocus: focus, setFocus: setInputFocused });
  const router = useRouter();
  const movePage = (id: number, type: "member" | "study") => {
    setInputFocused(false);
    setSearchValue("");
    if (type === "study") router.push(`/study/${id}`);
    if (type === "member") router.push(`/member/${id}`);
  };

  if (isLoading) {
    return (
      <S.Container>
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Loading />
        </div>
      </S.Container>
    );
  }

  if (searchResult === undefined) {
    return (
      <S.Container>
        <div style={{ width: "100%", textAlign: "center" }}>검색어를 입력해 주세요</div>
      </S.Container>
    );
  }

  if (searchResult.members.length === 0 && searchResult.studies.length === 0) {
    return (
      <S.Container>
        <div style={{ width: "100%", textAlign: "center" }}>검색 결과가 없습니다</div>
      </S.Container>
    );
  }
  3;
  return (
    <S.Container ref={formRef}>
      <S.Ul>
        <S.Title>유저 ({searchResult.members.length})</S.Title>
        {searchResult.members.length === 0 ? (
          <div style={{ width: "100%", textAlign: "center" }}>해당 유저가 없습니다.</div>
        ) : (
          searchResult.members.map((e, i) => (
            <S.Li key={i} onClick={() => movePage(e.id, "member")}>
              <Image src={e.profileImg} width={50} height={50} alt="user Image" style={{ borderRadius: "100%" }} />
              <span>{e.nickname}</span>
            </S.Li>
          ))
        )}
      </S.Ul>
      <S.Divider></S.Divider>
      <S.Ul>
        <S.Title>스터디 ({searchResult.studies.length})</S.Title>
        {searchResult.studies.length === 0 ? (
          <div style={{ width: "100%", textAlign: "center" }}>해당 스터디가 없습니다.</div>
        ) : (
          searchResult.studies.map((e, i) => (
            <S.Li key={i} onClick={() => movePage(e.id, "study")}>
              <span>{e.name}</span>
            </S.Li>
          ))
        )}
      </S.Ul>
    </S.Container>
  );
};

const Title = styled.div`
  font-size: 13px;
`;

const Container = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 100%;
  max-height: 300px;
  background-color: ${themedPalette.bg_element3};
  color: ${themedPalette.text1};
  border-radius: 7px;
  padding: 1rem;
  overflow-y: scroll;
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${themedPalette.border};
  margin-bottom: 10px;
`;

const Li = styled.li`
  font-size: 14px;
  padding: 5px;
  border-radius: 7px;
  font-weight: 400;
  width: 100%;
  height: 60px;
  &:hover {
    background-color: ${themedPalette.bg_element2};
  }
  cursor: pointer;
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
    font-weight: 500;
    font-size: 16px;
  }
`;

const Ul = styled.ul`
  height: 45%;

  div {
    margin-bottom: 10px;
  }
`;

const S = { Container, Ul, Li, Divider, Title };

export default SearchBox;
