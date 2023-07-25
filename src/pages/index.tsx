import { S } from "./style";
import { useEffect, useState } from "react";
import { login } from "@/store/modules/user";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { GetServerSideProps } from 'next'

// Your page component here


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const { accessToken, refreshToken, memberId } = context.query  as { 
    accessToken: string; 
    refreshToken: string; 
    memberId: string; 
  };;
  
  // Set the cookie on the server
  console.log('hello!!hello!!hello!!hello!!');
  // context.res.setHeader('Set-Cookie', `accessToken=${accessToken}; Path=/; Max-Age=${30 * 24 * 60 * 60}; HttpOnly; Secure`);
  if(accessToken){
    res.setHeader('Set-Cookie', `accessToken=${accessToken}; Path=/; HttpOnly; Secure`);
    res.writeHead(302, { Location: '/rank/study' });
    res.end();
    return {props: {}};
    // console.log('access Token ok', accessToken);
  }


  return {
    props: {}, // will be passed to the page component as props
  };
}

const Home = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const onClick = async() => {
    window.location.href = `${process.env.NEXT_PUBLIC_LOGIN_URL}oauth2/authorization/kakao`
  }

  useEffect(() => {
    if(Object.keys(router.query).length !== 0){
      const accessToken:any = router.query.accessToken
      const refreshToken:any = router.query.refreshToken
      const memberId:any = router.query.memberId
      localStorage.setItem('token', accessToken)
      localStorage.setItem('refresh_token', refreshToken)
      // API.setAllCookies({accessToken, refreshToken, memberId});
      dispatch(login(memberId))
    }
    // fetch('http://localhost:3000', {
    //   method: 'GET'
    // }).then((resp) => {
    //   console.log(resp.headers.get('Date'));
    // });
  }, [router.query])

  return (
    <S.Container>
      <S.Wrapper>
        <div>
          알고리즘 실력 향상은 BAEKER!
          <br />
          알고리즘 공부를 위한 스터디 그룹을 만들고 가입하세요.
          <br />
          다양한 규칙 수행 보상을 통해 스터디 랭커에 도전해 보세요!
        </div>
        <S.KakaoButton onClick={onClick}/>
      </S.Wrapper>
    </S.Container>
  );
};
export default Home;
