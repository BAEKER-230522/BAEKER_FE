import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";
import LocalStorage from "@/util/localstorage";
import { useDispatch } from "react-redux";
import { login } from "@/store/modules/user";

export const useKakaoLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    if (code) {
      const kakaoResponse = async () =>
        await axios
          .get(`${process.env.NEXT_PUBLIC_BASE_URL}login/oauth2/kakao?code=${code}&redirectUri=${KAKAO_REDIRECT_URI}`)
          .then((res) => {
            const { accessToken, refreshToken, memberId, isBaekJoonConnect } = res.data;
            LocalStorage.setItem("refreshToken", refreshToken);
            LocalStorage.setItem("memberId", memberId);
            document.cookie = `accessToken=${accessToken};path=/`;
            document.cookie = `refreshToken=${refreshToken};path=/`;
            document.cookie = `memberId=${memberId};path=/`;
            document.cookie = `isBaekJoonConnect=${isBaekJoonConnect};path=/`;
            dispatch(login());
            if (isBaekJoonConnect) {
              router.push("/profile");
            } else {
              router.push("connector");
            }
          });
      kakaoResponse();
    }
  }, []);
};
