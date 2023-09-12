import axios from "axios";
import { useEffect } from "react";

// import { GetServerSideProps } from "next";
// import { themedPalette } from "@/styles/theme";

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { req, res } = context;
//   const { accessToken, refreshToken, memberId, baekJoonConnect } =
//     context.query as {
//       accessToken: string;
//       refreshToken: string;
//       memberId: string;
//       baekJoonConnect: string;
//     };

//   if (accessToken) {
//     // HttpOnly;
//     res.setHeader("Set-Cookie", [
//       `accessToken=${accessToken}; Path=/; Secure`,
//       `refreshToken=${refreshToken}; Path=/; Secure`,
//       `memberId=${memberId}; Path=/; Secure`,
//       `baekJoonConnect=${baekJoonConnect}; Path=/; Secure`,
//     ]);
//     // 백준 연동 여부에 따른 페이지 이동
//     if (baekJoonConnect === "true") {
//       res.writeHead(302, { Location: "/profile" });
//       res.end();
//       return { props: {} };
//     } else {
//       res.writeHead(302, { Location: "/connector" });
//       res.end();
//       return { props: {} };
//     }
//   }
//   return { props: {} };
// };

const Login = () => {
  const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    if (code) {
      const kakaoResponse = async () =>
        await axios
          .post(
            `${process.env.NEXT_PUBLIC_BASE_URL}oauth2/authorization/kakao?code=${code}&redirectUri=${KAKAO_REDIRECT_URI}`
          )
          .then((e) => console.log(e));
      kakaoResponse();
    }
  }, []);
  return <div>LOGIN PAGE</div>;
};

export default Login;
