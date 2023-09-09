import { memberApi } from "@/api/memberApi";

const useFetchUserData = (userId: number) => {
  const { data, isLoading } = memberApi.useGetMemberQuery(userId);
  return { data, isLoading };
};

export default useFetchUserData;
