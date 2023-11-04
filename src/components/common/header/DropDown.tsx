import { S } from "./style";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import LocalStorage from "@/util/localstorage";
import { useDispatch } from "react-redux";
import { logout } from "@/store/modules/user";

interface IElement {
  text: string;
  type: "router" | "signout";
  url?: string;
}

interface IProps {
  text: string;
  element: IElement[];
}

const DropDown = ({ text, element }: IProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    LocalStorage.removeItem("memberId");
    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "baekJoonConnect=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    dispatch(logout());
    router.push("/");
  };

  const movePage = (url: string) => {
    router.push(`${url}`);
  };
  return (
    <S.DropDownContainer>
      <S.Button>{text}</S.Button>
      <S.DropDown>
        <ul>
          {element.map((e: IElement, idx: number) =>
            e.type === "router" ? (
              <li key={idx} onClick={() => movePage(e.url!)}>
                {e.text}
              </li>
            ) : (
              <li key={idx} onClick={handleLogout}>
                {e.text}
              </li>
            )
          )}
        </ul>
      </S.DropDown>
    </S.DropDownContainer>
  );
};

export default DropDown;
