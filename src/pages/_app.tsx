import Header from "@/components/common/Header";
import { GlobalStyle } from "@/styles/global.style";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import wrapper from "@/store";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { login, logout } from "@/store/modules/user";
import axios from "axios";
import Head from "next/head";

const App = ({ Component, pageProps }: any) => {
  const dispatch = useDispatch();
  const fetchMemberId = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/getMemberId`);
    if (res.data.memberId === null) {
      dispatch(logout());
    } else {
      dispatch(login(res.data.memberId));
    }
  };

  fetchMemberId();
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
