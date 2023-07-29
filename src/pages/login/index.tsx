import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/store/modules/user';


interface QueryParams extends ParsedUrlQuery {
  accessToken: string;
  refreshToken: string;
  memberId: string;
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const { accessToken, refreshToken, memberId } = context.query  as { 
    accessToken: string; 
    refreshToken: string; 
    memberId: string; 
  };
  
  if(accessToken){
    // HttpOnly;
    res.setHeader('Set-Cookie', [
      `accessToken=${accessToken}; Path=/; Secure`,
      `refreshToken=${refreshToken}; Path=/; Secure`,
      `memberId=${memberId}; Path=/; Secure`
    ]);
    res.writeHead(302, { Location: '/profile' });
    res.end()
    return {props:{}};
  }
  return {props:{}};
}

const Login = () => {
  return <div>LOGIN PAGE</div>
}

export default Login