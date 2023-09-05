import { studyApi } from "@/api/studyApi";
import { USER_NUMBER } from "@/util/constant";

interface IArgument {
  memberId: number;
  status: number;
}

const useFetchUserStudyList = ({ memberId, status }: IArgument) => {
  const { data, isLoading } = studyApi.useGetUserStudyListQuery({
    memberId: memberId,
    status,
  });
  return { data, isLoading };
};

export default useFetchUserStudyList;
