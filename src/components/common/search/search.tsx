import styled from "styled-components"
import { AiOutlineSearch } from "react-icons/ai";
import SearchBox from "./search-box";
import useInput from "@/hooks/useInput";
import { useEffect, useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue, onChangeSearch] = useInput('');
  const [searchResult, setSearchResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);
  const [focus, setFocus] = useState(false);
  const handleInputFocus = () => {
    setFocus(true);
    setInputFocused(true);
  }

  const handleInputBlur = () => {
    setFocus(false);
  }
  
  useEffect(() => {
    const debounceTimeout = setTimeout(async () => {
      try {
        setIsLoading(true)
        const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/search/v1/${searchValue}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          }
        })
        const result = await data.json();
        setSearchResult(result.data)
      }catch(err){
          console.log(err);
        }finally{
          setIsLoading(false)
        }
      }, 1000);
    return () => clearTimeout(debounceTimeout);
  }, [searchValue]);
  return (
    <S.Container>
      <S.SearchSVG/>  
      <S.Input 
        value={searchValue} 
        onChange={onChangeSearch}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {isInputFocused && <SearchBox searchResult={searchResult!} isLoading={isLoading} setInputFocused={setInputFocused} focus={focus} setSearchValue={setSearchValue}/>}
    </S.Container>
  )
}

const Container = styled.div`
    width: 30%;
    height: 55px;
    border-radius: 20px;
    border : 2px solid ${({theme}) => theme.border};
    position : relative;
`
const Input = styled.input`
  position : absolute;
  left : 50px;
  top : 5px;
  width: 80%;
  border: none;
  height: 45px;
  border-radius: 5px;
  background-color: transparent;
  padding: 0px 10px;
  font-size: 1rem;
  font-weight: 500;
  color: ${({theme}) => theme.text1};
  outline: none;
`;


const SearchSVG = styled(AiOutlineSearch)`
  position : absolute;
  top : 13px;
  left: 10px;
  width: 30px;
  height: 30px;
  color: ${({theme}) => theme.text1};
`;

const S = { Container, SearchSVG, Input }


export default Search