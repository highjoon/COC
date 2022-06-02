import "styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Clash of Clans Stats</title>
        <link rel="icon" href="/assets/icons/logo.webp" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
