import { IMG_URL } from "@/pages/mock";
import { S } from "./styled";
import Link from "next/link";
import { memberApi } from "@/api/memberApi";

const UserInfo = () => {
  const { data: memberData, error, isLoading } = memberApi.useGetMemberQuery(1);

  if (isLoading) return <div>Loading...</div>;
  return (
    <S.Container>
      <S.Image src={IMG_URL} />
      <S.Name>{memberData.data.username}</S.Name>
      <S.Introduce>{memberData.data.about}</S.Introduce>
      <Link href={"/modify"}>
        <S.Button>프로필 수정</S.Button>
      </Link>
    </S.Container>
  );
};

export default UserInfo;
