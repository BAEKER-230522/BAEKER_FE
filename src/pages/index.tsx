import { PageContainer } from "@/styles/common.style";
import { themedPalette } from "@/styles/theme";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { login } from "@/store/modules/user";
import Image from "next/image";
import styled from "styled-components";
import useOutsideClick from "@/hooks/mission/useOutsideClick";
import LocalStorage from "@/util/localstorage";

const Lading = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
  const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  const [isInitClick, setIsInitClick] = useState<boolean>(false);
  const [isLoginBoxOpened, setIsLoginBoxOpened] = useState<boolean>(false);
  const LoginBoxHandler = () => {
    setIsInitClick(true);
    setIsLoginBoxOpened(true);
  };
  const loginModal = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: loginModal,
    isInit: isInitClick,
    setIsInit: setIsInitClick,
    isOpened: isLoginBoxOpened,
    setIsOpened: setIsLoginBoxOpened,
  });

  const guestLoginHandler = () => {
    dispatch(login());
    LocalStorage.setItem("memberId", process.env.NEXT_PUBLIC_GUEST_MEMBER_ID!);
    document.cookie = `accessToken=${process.env.NEXT_PUBLIC_GUEST_ACCESS_TOKEN};path=/`;
    document.cookie = `refreshToken=${process.env.NEXT_PUBLIC_GUEST_ACCESS_TOKEN};path=/`;
    router.push("/profile");
  };
  return (
    <S.Container>
      {isLoginBoxOpened && (
        <S.ModalContainer>
          <S.LoginBox ref={loginModal}>
            <S.Kakao onClick={kakaoLogin}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20.0002 5C29.1668 5 36.6668 10.9667 36.6668 18.3333C36.6668 25.7 29.1668 31.6667 20.0002 31.6667C17.9335 31.6667 15.9502 31.3667 14.1168 30.8333C9.25016 35 3.3335 35 3.3335 35C7.21683 31.1167 7.8335 28.5 7.91683 27.5C5.0835 25.1167 3.3335 21.8833 3.3335 18.3333C3.3335 10.9667 10.8335 5 20.0002 5Z"
                  fill="rgba(34,34,34)"></path>
              </svg>
            </S.Kakao>
            <S.LoginButton onClick={guestLoginHandler}>Guest 둘러보기</S.LoginButton>
          </S.LoginBox>
        </S.ModalContainer>
      )}
      <S.Wrapper>
        <S.TextWrapper>
          <S.Text>
            백준 알고리즘 문제를 함께 풀며,
            <br /> 도전과 성장의 즐거움을 누릴 수 있습니다.
          </S.Text>
        </S.TextWrapper>
        <S.LoginButton onClick={LoginBoxHandler}>BAEKER 시작하기</S.LoginButton>
        <S.IntroduceContainer>
          <S.IntroduceWrapper>
            <S.ImgWrapper>
              <Image
                src="/study.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="스터디 페이지 이미지"
              />
            </S.ImgWrapper>
            <S.Introduce>
              <h2>스터디 그룹</h2>
              <p>
                스터디 그룹을 통해 함께 문제를 풀어나가는 경험을 만끽하세요. <br />
                같은 목표를 가진 스터디원들과 동기를 부여받으며 학습을 진행합니다.
              </p>
            </S.Introduce>
          </S.IntroduceWrapper>
          <S.IntroduceWrapper>
            <S.Introduce>
              <h2>스터디 미션 생성</h2>
              <p>
                미션을 생성하여 주어진 기간 동안 <br />
                특정 문제들을 해결하는 도전을 진행할 수 있습니다.
                <br />
                미션을 성공적으로 완료하면 스터디 경험치를 획득하여 <br />
                스터디 랭킹에 반영됩니다.
              </p>
            </S.Introduce>
            <S.ImgWrapper>
              <Image
                src="/create_mission.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="미션 생성 페이지 이미지"
              />
            </S.ImgWrapper>
          </S.IntroduceWrapper>
          <S.IntroduceWrapper>
            <S.ImgWrapper>
              <Image
                src="/mission_status.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="미션 현황 페이지 이미지"
              />
            </S.ImgWrapper>
            <S.Introduce>
              <h2>스터디 미션 현황</h2>
              <p>
                미션의 진행 상태를 한 눈에 파악할 수 있는 대시보드를 제공합니다. <br />
                그룹원들의 미션 진행 상황을 확인하며 상호 동기부여가 됩니다.
              </p>
            </S.Introduce>
          </S.IntroduceWrapper>
          <S.IntroduceWrapper>
            <S.Introduce>
              <h2>코드 리뷰</h2>
              <p>
                각자의 코드를 업로드하여 개선점을 소통할 수 있습니다.
                <br />
                서로의 지식을 공유하는 학습 경험을 얻을 수 있습니다.
              </p>
            </S.Introduce>
            <S.ImgWrapper>
              <Image
                src="/code_review.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="코드 리뷰 페이지 이미지"
              />
            </S.ImgWrapper>
          </S.IntroduceWrapper>
        </S.IntroduceContainer>
      </S.Wrapper>
    </S.Container>
  );
};
export default Lading;

const Container = styled(PageContainer)``;

const TextWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 80px;
  margin-top: 100px;
`;
const Text = styled.h1`
  font-weight: 700;
  line-height: 1.3em;
  font-size: 2.3rem;
  color: ${themedPalette.text1};
`;

const Wrapper = styled.div`
  width: 80%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #a6adbb;
  text-align: center;
  font-size: 1.4rem;
  line-height: 1.9rem;
`;

const LoginButton = styled.button`
  /* background-color: rgb(255, 232, 18); */
  background-color: ${themedPalette.bg_element4};
  color: white;
  padding: 12px 25px;
  border-radius: 14px;
  line-height: 40px;
  font-size: 1.1rem;
  outline: none;
  border: none;
  cursor: pointer;
`;

const Kakao = styled.a`
  background-color: rgb(255, 232, 18);
  color: white;
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const IntroduceContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroduceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  border-radius: 12px;
  margin-bottom: 100px;
  margin-top: 100px;
`;

const ImgWrapper = styled.picture`
  width: 60%;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${themedPalette.text1};
  p {
    font-size: 1.1rem;
    line-height: 1.5rem;
    word-break: keep-all;
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
  }
`;

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; /* 변경된 부분 */
  top: 0; /* 추가된 부분 */
  left: 0; /* 추가된 부분 */
  z-index: 9999;
`;

const LoginBox = styled.div`
  width: 30%;
  height: 230px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  gap: 30px;
`;

const S = {
  TextWrapper,
  Introduce,
  ImgWrapper,
  IntroduceWrapper,
  IntroduceContainer,
  Kakao,
  Container,
  Wrapper,
  Text,
  ModalContainer,
  LoginBox,
  LoginButton,
};
