import { createGlobalStyle } from "styled-components";
import { themes } from "./theme";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    ${themes.light}
    transition: 0.125s all ease-in;
  }

  @media (prefers-color-scheme: dark) {
    body {
      ${themes.dark}
    }
  }

  body[data-theme='light'] {
    ${themes.light};
  }

  body[data-theme='dark'] {
    ${themes.dark};
  }

`;
