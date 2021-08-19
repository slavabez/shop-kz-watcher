import { useEffect } from "react";
import { Head } from "next/document";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../src/theme";
import { CssBaseline } from "@material-ui/core";
import { AppProps } from "next/app";

export default function WatcherApp(props: AppProps) {
  const { Component, pageProps } = props;
  // Removing servcer side injected CSS
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
