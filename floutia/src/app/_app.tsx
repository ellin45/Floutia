import {SessionProvider} from "next-auth/react";
function App({
  Component,
  pageProps: {session, ...pageProps},
}: {
  Component: any;
  pageProps: {
    [x: string]: any;
    session: any;
  };
}): JSX.Element {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
