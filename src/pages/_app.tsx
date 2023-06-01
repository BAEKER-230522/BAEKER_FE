import React from "react";
import Header from "@/components/Header";
import { GlobalStyle } from "@/styles/global.styled";

export default function App({ Component }: any) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Component />
    </React.Fragment>
  );
}
