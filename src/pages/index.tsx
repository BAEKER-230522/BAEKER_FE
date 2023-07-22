import { S } from "./style";
import { useEffect } from "react";
import { login } from "@/store/modules/user";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch()
  const userId = useSelector((state:any) => {return state.user.userId})

  const onClick = async() => {
    window.location.href = `${process.env.NEXT_PUBLIC_LOGIN_URL}oauth2/authorization/kakao`
  }

  useEffect(() => {
    // fetch('http://localhost:3000', {
    //   method: 'GET'
    // }).then((resp) => {
    //   console.log(resp.headers.get('Date'));
    // });
    console.log(userId);
    const TOKEN = new URL(window.location.href).searchParams.get("accessToken");
    if(TOKEN){
      localStorage.setItem('token', TOKEN)
    }
  }, [])

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
