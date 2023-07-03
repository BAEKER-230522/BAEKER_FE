import React from "react";
import Header from "@/components/common/Header";
import { GlobalStyle } from "@/styles/global.styled";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import wrapper from "@/store";
import PropTypes from "prop-types";

const App = ({ Component, ...pageProps }: any) => {
  return (
    <React.Fragment>
      <ToastContainer position="top-right" autoClose={1500} />
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
