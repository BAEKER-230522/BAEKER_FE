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
import { useSelector } from "react-redux";


const App = ({ Component, pageProps }: any) => {
  const isDarkMode = JSON.parse(useSelector((state:any) => {return state.darkmode.isDarkMode}))
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
