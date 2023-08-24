import React from "react";
import Header from "@/components/common/header";
import { GlobalStyle } from "@/styles/global.styled";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import wrapper from "@/store";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { login, logout } from "@/store/modules/user";
import { ThemeProvider } from 'styled-components';
import axios from "axios";
import { theme } from "@/style/theme";

const App = ({ Component, pageProps }: any) => {
  const dispatch = useDispatch()
  const fetchMemberId = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/getMemberId`);
    if(res.data.memberId === null){
      dispatch(logout())
    }else{
      dispatch(login(res.data.memberId))
    }
  };

  fetchMemberId();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ToastContainer position="top-right" autoClose={1500} />
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
