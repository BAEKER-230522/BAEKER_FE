import { useRouter } from "next/router";

interface IArg {
  id: number;
  url: string;
  routeType: string;
}

export const useNavigation = () => {
  const router = useRouter();

  const navigatePage = ({ id, url, routeType }: IArg) => {
    if (routeType === "defaultRoute") {
      router.push({ pathname: `/${url}/${id}` });
    } else {
      router.push(`${router.asPath}/${url}/${id}`);
    }
  };

  return {
    navigatePage,
  };
};
