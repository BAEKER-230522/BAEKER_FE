import { memberApi } from "@/api/memberApi";
import axios from "axios";
import { toast } from "react-toastify";

interface IArgument {
  nameValue: string;
  aboutValue: string;
  imgFile: File | undefined;
}

const useUpdateUserInfo = (memberId: number) => {
  const [updateUserInfo] = memberApi.useUpdateMemberMutation();

  const handleUpdateUserInfo = async ({
    nameValue,
    aboutValue,
    imgFile,
  }: IArgument) => {
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

    try {
      await updateUserInfo(formData);
      toast("정보 등록 완료");
    } catch (err) {
      console.log(err);
    }
  };

  return { handleUpdateUserInfo };
};

export default useUpdateUserInfo;
