import { createGlobalStyle } from "styled-components";
import { themes } from "./theme";
import reset from "styled-reset";
import { themedPalette } from "./theme";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  
  body {
    ${themes.light}
    transition: 0.125s all ease-in;
  }

  @media (prefers-color-scheme: dark) {
    body {
      ${themes.dark}
      background-color: ${themedPalette.bg_element};
    }
  }
 
  body[data-theme='light'] {
    ${themes.light};
  }

  body[data-theme='dark'] {
    ${themes.dark};
    background-color: ${themedPalette.bg_element};
  }

`;
