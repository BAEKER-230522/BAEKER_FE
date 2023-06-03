import React from "react";
import Header from "@/components/Header";
import { GlobalStyle } from "@/styles/global.styled";
import wrapper from "@/store";
import PropTypes from "prop-types";

const App = ({ Component, ...pageProps }: any) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
