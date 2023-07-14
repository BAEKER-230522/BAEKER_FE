import axios from "axios";
import { S } from "./style";
import Link from "next/link";

const Home = () => {
  const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
  const KAKAO_REDIRECT_URI = "http://localhost:3000/login/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  const onClick = async() => {
    const res = await axios({method:'post', url:"http://101.101.208.240:9000/oauth2/authorization/kakao"})
    console.log(res)
  }

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
// dev branch 원격 저장소로
export default Home;
