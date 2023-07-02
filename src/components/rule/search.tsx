import { useRouter } from "next/router";
import { S } from "./style";

const Search = () => {
  const router = useRouter()
  
  return (
    <S.Container>
      <S.CreateButton onClick={() => router.push({pathname:"/rule/create"})}>규칙 등록</S.CreateButton>
      <S.InputContainer>
        <S.Input placeholder="검색어를 입력해 주세요" />
        <S.Button>
          <S.SearchSVG />
        </S.Button>
      </S.InputContainer>
    </S.Container>
  );
};

export default Search;
