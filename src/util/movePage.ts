import { useRouter } from "next/router";

export const movePage = (type: "member" | "study" | "study_rank" | "member_rank") => {
  const router = useRouter();
  switch (type) {
    case "member":
      router.push("/member/1");
      return;
    case "study":
      router.push("/study/1");
      return;
    case "study_rank":
      router.push("/rank/study");
      return;
    case "member_rank":
      router.push("/rank/algorithm");
      return;
  }
};
