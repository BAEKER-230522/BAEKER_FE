// kakao_login

import { useEffect } from "react"
import axios from "axios";

const KakaoLogin = () => {
  
  const kakaoCode = async () => {
    const KAKAO_CODE = new URL(window.location.href).searchParams.get("code");
    console.log(KAKAO_CODE);
    await axios({method: "get", url:`${process.env.NEXT_PUBLIC_BASE_URL}oauth/token?code=${KAKAO_CODE}`})
    .then((res) => {
      console.log(res)
    })
  }

  useEffect(() => {
    kakaoCode()
  })

  return <div>LOGIN PAGE</div>
}

export default KakaoLogin