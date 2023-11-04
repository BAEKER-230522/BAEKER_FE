import { studyApi } from "@/api/studyApi";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

interface IProblemList {
  problemName: string;
  problemNumber: number;
}

interface IArgument {
  nameValue: string;
  aboutValue: string;
  param: string | undefined | string[];
  deadline: string;
  startDate: string;
  problemList: IProblemList[];
  xp: number;
}

const useMissionEdit = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [createMission] = studyApi.useCreateStudyMissionMutation();
  const [updateMission] = studyApi.useUpdateStudyMissionMutation();

  const handleCreateMission = async ({
    nameValue,
    aboutValue,
    param,
    startDate,
    deadline,
    problemList,
    xp,
  }: IArgument) => {
    try {
      await createMission({
        name: nameValue,
        about: aboutValue,
        studyId: param,
        startDate: startDate,
        deadline: deadline,
        createProblemList: problemList,
        xp,
      })
        .unwrap()
        .then(() => toast("미션 등록 완료"))
        .catch(() => toast("미션 등록 실패"));
      router.push({ pathname: `/study/${param}` });
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateStudy = async ({ nameValue, aboutValue, router }: any) => {
    try {
      await updateMission({
        id: Number(router.query.id),
        body: { name: nameValue, about: aboutValue },
      });
      toast("미션 수정 완료");
      router.push({ pathname: `/study/${router.query.id}` });
    } catch (err) {
      console.log(err);
    }
  };

  return { handleCreateMission, handleUpdateStudy };
};

export default useMissionEdit;
