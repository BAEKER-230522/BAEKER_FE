import { memberApi } from "@/api/memberApi";
import { toast } from "react-toastify";

interface IArgument {
  nameValue: string;
  aboutValue: string;
  imgFile: File | undefined;
}

const useUpdateUserInfo = (memberId: number) => {
  const [updateUserInfo] = memberApi.useUpdateMemberMutation();
  const [updateUserInfoWithoutImg] = memberApi.useUpdateMemberInfoMutation();
  const handleUpdateUserInfo = async ({ nameValue, aboutValue, imgFile }: IArgument) => {
    if (imgFile === undefined) {
      //   {
      //     "id": 1,
      //     "nickname": "꾹",
      //     "about": "hi"
      // }
      await updateUserInfoWithoutImg({
        id: memberId,
        nickname: nameValue,
        about: aboutValue,
      })
        .unwrap()
        .then((payload) => toast("프로필 수정 완료"))
        .catch((error) => toast("실패"));
    } else {
      const formData = new FormData();
      formData.append(
        "dto",
        new Blob(
          [
            JSON.stringify({
              id: memberId,
              nickname: nameValue,
              about: aboutValue,
            }),
          ],
          { type: "application/json" }
        )
      );
      formData.append("img", imgFile!);
      await updateUserInfo(formData)
        .unwrap()
        .then((payload) => {
          toast("프로필 수정 완료");
          console.log(payload);
        })
        .catch((error) => {
          toast("프로필 수정 실패");
          console.log(error);
        });
    }
  };

  return { handleUpdateUserInfo, updateUserInfoWithoutImg };
};

export default useUpdateUserInfo;
