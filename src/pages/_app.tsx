import Header from "@/components/common/Header";
import { GlobalStyle } from "@/styles/global.style";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import wrapper from "@/store";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Head from "next/head";
import LocalStorage from "@/util/localstorage";

const App = ({ Component, pageProps }: any) => {
  const dispatch = useDispatch();

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
