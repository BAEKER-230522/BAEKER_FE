import styled from "styled-components";
import Loading from "../loading/Loading";

interface IMember {
  nickname: string;
  id : number;
  ranking : number;
}

interface IStudy {
  id: number;
  name : string;
}

interface IResult {
  members : IMember[];
  studies : IStudy[];
}

interface IProp {
  searchResult : IResult;
  isLoading : boolean;
}


const SearchBox = ({searchResult, isLoading}:IProp) => {
  
  if(isLoading){
    return (
      <S.Container>
        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
          <Loading/>
        </div>
      </S.Container>
    )
  }
  
  if(searchResult === undefined){
    return <S.Container>
        <div style={{width:"100%", textAlign:"center"}}>검색어를 입력해 주세요</div>
      </S.Container>
  }

  if(searchResult.members.length === 0 && searchResult.studies.length === 0){
    return <S.Container>
    <div style={{width:"100%", textAlign:"center"}}>검색 결과가 없습니다</div>
  </S.Container>
  }
  
  return(
    <S.Container>
      <S.Ul>
        <div>유저 ({searchResult.members.length})</div>
        {searchResult.members.map((e, i) => (
          <S.Li>{e.nickname}</S.Li>
        ))}
      </S.Ul>
      <S.Divider></S.Divider>
      <S.Ul>
        <div>스터디 ({searchResult.studies.length})</div>
        {searchResult.studies.map((e, i) => (
          <S.Li>{e.name}</S.Li>
        ))}
      </S.Ul>
    </S.Container>
  )
}

const Container = styled.div`
  position: absolute;
  top : 60px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 100%;
  max-height: 300px;
  background-color: ${({theme}) => theme.wrapperBgColor_3};
  color: ${({theme}) => theme.color};
  border-radius: 7px;
  padding : 1rem;
`
const Divider = styled.div`
  height: 1px;
  width : 100%;
  background-color: ${({theme}) => theme.border};
  margin-bottom : 10px;
`

const Li = styled.li`
  font-size : 14px;
  margin-bottom : 10px;
  font-weight: 400;
  cursor : pointer;
`

const Ul = styled.ul`
  height: 45%;

  div{
    margin-bottom : 10px;
  }
`

const S = {Container, Ul, Li, Divider}

export default SearchBox