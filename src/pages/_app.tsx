import { GlobalStyle } from "@/styles/global.style";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/common/header/Header";
import wrapper from "@/store";
import PropTypes from "prop-types";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import "highlight.js/styles/vs2015.css";
import React from "react";

const App = ({ Component, pageProps }: any) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>BAEKER</title>
      </Head>
      <ToastContainer position="top-right" autoClose={1500} />
      <GlobalStyle />
      <Header />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
