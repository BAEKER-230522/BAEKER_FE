import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const { accessToken, refreshToken, memberId, baekJoonConnect } = context.query  as { 
    accessToken: string; 
    refreshToken: string; 
    memberId: string; 
    baekJoonConnect: string;
  };
  
  if(accessToken){
    // HttpOnly;
    res.setHeader('Set-Cookie', [
      `accessToken=${accessToken}; Path=/; Secure`,
      `refreshToken=${refreshToken}; Path=/; Secure`,
      `memberId=${memberId}; Path=/; Secure`,
      `baekJoonConnect=${baekJoonConnect}; Path=/; Secure`,
    ]);
    // 백준 연동 여부에 따른 페이지 이동
    if(baekJoonConnect === 'true'){
      console.log('baekJoonConnect',baekJoonConnect, 'true');
      res.writeHead(302, { Location: '/profile' });
      res.end()
      return {props:{}};
    }else{
      console.log('baekJoonConnect', baekJoonConnect, 'false');
      res.writeHead(302, { Location: '/connector' });
      res.end()
      return {props:{}};
    }
  }
  return {props:{}};
}

const Login = () => {
  return <div>LOGIN PAGE</div>
}

export default Login