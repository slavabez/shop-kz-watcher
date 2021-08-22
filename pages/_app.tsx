import { FC, useEffect } from "react";
import { SWRConfig } from "swr";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createStyles, makeStyles, Theme, ThemeProvider } from "@material-ui/core/styles";
import { AppProps } from "next/app";
import Head from "next/head";
import theme from "@styles/theme";
import { AppBar, IconButton, Paper, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  const classes = useStyles();

  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <SWRConfig
        value={{
          refreshInterval: 60000,
          fetcher: (res, init) => fetch(res, init).then((res) => res.json()),
        }}
      >
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h5">Мониторинг цен</Typography>
            </Toolbar>
          </AppBar>
          <Paper>
            <Component {...pageProps} />
          </Paper>
        </ThemeProvider>
      </SWRConfig>
    </>
  );
};

export default MyApp;
