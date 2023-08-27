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
  const handleInputFocus = () => {
    setInputFocused(true);
  }
  
  const handleInputBlur = () => {
    setInputFocused(false);
  }
  useEffect(() => {
    const debounceTimeout = setTimeout(async () => {
      try {
        setIsLoading(true)
        const data = await fetch(`https://34.64.245.180:443/api/search/v1/${searchValue}`, {
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
      {isInputFocused && <SearchBox searchResult={searchResult} isLoading={isLoading} />}
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
  color: ${({theme}) => theme.color};
  outline: none;
`;


const SearchSVG = styled(AiOutlineSearch)`
  position : absolute;
  top : 13px;
  left: 10px;
  width: 30px;
  height: 30px;
  color: ${({theme}) => theme.color};
`;

const S = { Container, SearchSVG, Input }


export default Search