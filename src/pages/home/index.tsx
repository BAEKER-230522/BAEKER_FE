import styled from "styled-components";
import { PageContainer } from "@/styles/common.style";
import { themedPalette } from "@/styles/theme";
import Head from "next/head";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const movePage = (type: "member" | "study_manage" | "study_rank" | "member_rank") => {
    switch (type) {
      case "member":
        router.push("/profile");
        return;
      case "study_manage":
        router.push("/study/manage");
        return;
      case "study_rank":
        router.push("/rank/study");
        return;
      case "member_rank":
        router.push("/rank/algorithm");
        return;
    }
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="백준 알고리즘 문제를 함께 스터디 형식으로 풀며,도전과 성장의 즐거움을 누릴 수 있습니다."
        />
        <title>BAEKER | HOME</title>
      </Head>
      <S.Container>
        <S.Wrapper>
          <S.TextWrapper>
            <span>스터디 그룹</span>
            <p>
              자신만의 스터디를 만들거나 다른 스터디에 가입하여,
              <br /> 함께 문제를 풀어나가는 경험을 만끽하세요.
            </p>

            <S.MoveTag onClick={() => movePage("study_manage")}>스터디 생성</S.MoveTag>
          </S.TextWrapper>
          <S.TextWrapper>
            <span>개인 문제 풀이 통계</span>
            <p>
              일주일 동안의 문제풀이 현황을 한눈에 파악하며,
              <br /> 개인적인 성장을 지속적으로 모니터링하세요.
            </p>
            <S.MoveTag onClick={() => movePage("member")}>프로필 페이지</S.MoveTag>
          </S.TextWrapper>
          <S.TextWrapper>
            <span>랭킹 시스템</span>
            <p>
              스터디 미션을 완료하면서 경험치를 얻어,
              <br /> 스터디 랭킹과 개인 랭킹을 높여보세요.
            </p>
            <S.MoveTag onClick={() => movePage("member_rank")}>개인 랭킹</S.MoveTag>
            <S.MoveTag onClick={() => movePage("study_rank")}>스터디 랭킹</S.MoveTag>
          </S.TextWrapper>
          <S.TextWrapper>
            <span>BAEKER</span>
            <p>
              백준 알고리즘 문제를 함께 스터디 형식으로 풀며, <br />
              도전과 성장의 즐거움을 누릴 수 있습니다.
            </p>
          </S.TextWrapper>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
export default Home;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${themedPalette.border};
  border-radius: ${themedPalette.borderRadius};
  padding: 20px 0px;
  span {
    font-size: 1.3rem;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  p {
    line-height: 20px;
    font-size: 15px;
    margin-left: 28px;
  }
  div {
    display: flex;
    align-items: center;
    height: 40px;
  }
`;

const MoveTag = styled.p`
  font-weight: 700;
  font-size: 15px;
  color: #1877ff;
  margin-top: 10px;
  cursor: pointer;
`;

const Container = styled(PageContainer)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 70%;
  height: 70%;
  padding: 15px;
  display: grid;
  grid-template-rows: repeat(2, 1fr); /* 2행 */
  grid-template-columns: repeat(2, 1fr); /* 2열 */
  gap: 10px;
  color: ${themedPalette.text1};
  font-size: 1.4rem;
  line-height: 1.9rem;
  border-radius: ${themedPalette.borderRadius};
`;

const KakaoButton = styled.button`
  width: 130px;
  height: 50px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-top: 10px;
`;

const S = {
  Container,
  Wrapper,
  KakaoButton,
  TextWrapper,
  MoveTag,
};
