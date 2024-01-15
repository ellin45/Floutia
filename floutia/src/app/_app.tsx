import {ThemeProvider} from "@emotion/react";
import {MantineProvider} from "@mantine/core";
import {Notifications} from "@mantine/notifications";
import {QueryClientProvider, QueryClient, Hydrate} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import axios from "axios";
import {getCookie} from "cookies-next";
import {AppProps, AppContext} from "next/app";
import Head from "next/head";
import {useState} from "react";
import {RecoilRoot} from "recoil";
import type {MutableSnapshot} from "recoil";
import Layout from "./components/header";
import {loginDataState} from "./recoil/atoms";
import GlobalStyle from "globals";

interface MyAppProps extends AppProps {
  loginData?: SpotifyApi.UserProfileResponse;
}

function App({Component, pageProps, loginData}: MyAppProps) {
  const [queryClient] = useState(() => new QueryClient());

  queryClient.setDefaultOptions({
    queries: {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  });

  const initializer = ({set}: MutableSnapshot) => {
    if (loginData) set(loginDataState, loginData);
  };

  return (
    <>
      <Head>
        <title>음악 검색</title>
        <meta name="description" content="음악 검색" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <RecoilRoot initializeState={initializer}>
        <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools initialIsOpen={true} />

          <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

App.getInitialProps = async (context: AppContext) => {
  const {ctx, Component} = context;
  let pageProps = {};
  let loginData: SpotifyApi.UserProfileResponse | null;

  const accessToken = getCookie("access_token", ctx);
  const refreshToken = getCookie("refresh_token", ctx);

  if (!refreshToken) {
    return {pageProps, loginData: null};
  }

  try {
    const loginDataResponse = await axios<SpotifyApi.UserProfileResponse>({
      method: "get",
      url: "https://api.spotify.com/v1/me",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    loginData = loginDataResponse.data;
  } catch {
    loginData = null;
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {pageProps, loginData};
};

export default App;
