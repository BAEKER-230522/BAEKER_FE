import { API } from "@/constant/api";

import { QUERY_KEY } from "@/constant/key";
import instance from "@/api/instance";

export const getAllMembers = async ({ page, limit }: { page: number; limit: number }) => {
  const { data } = await instance.get(`${API.MEMBER.END_POINT}/get/v1/ranking?page=${page}&content=${limit}`);
  return data;
};

export const useMembersQuery = async ({ page, limit, qc }: { page: number; limit: number; qc: any }) => {
  return qc.prefetchQuery({
    queryKey: [QUERY_KEY.MEMBER],
    queryFn: () => getAllMembers({ page, limit }),
    staleTime: Infinity,
  });
};
