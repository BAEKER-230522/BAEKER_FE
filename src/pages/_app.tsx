import { GlobalStyle } from "@/styles/global.style";
import { ToastContainer } from "react-toastify";
import Header from "@/components/common/header/Header";
import { wrapper } from "@/store";
import PropTypes from "prop-types";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import "highlight.js/styles/vs2015.css";

const App = ({ Component, pageProps }: any) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>BAEKER</title>
      </Head>
      <ToastContainer position="top-right" autoClose={1500} />
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
