import { memberApi } from "@/api/memberApi";
import { USER_NUMBER } from "@/util/constant";

const useFetchUserData = (userId: number) => {
  const { data, isLoading } = memberApi.useGetMemberQuery(userId);
  return { data, isLoading };
};

export default useFetchUserData;
