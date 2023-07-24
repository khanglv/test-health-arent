import React from "react";
import App from "next/app";
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>Health</title>
          <link rel="icon" href="/favicon.png" />
          <meta property="og:title" content="Health" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
export default MyApp;
