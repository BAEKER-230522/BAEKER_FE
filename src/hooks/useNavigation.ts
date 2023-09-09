import { useRouter } from "next/router";

interface IArg {
  id: number;
  type: string;
}

export const useNavigation = () => {
  const router = useRouter();

  const navigatePage = ({ id, type }: IArg) => {
    router.push({ pathname: `/${type}/${id}` });
  };

  return {
    navigatePage,
  };
};
