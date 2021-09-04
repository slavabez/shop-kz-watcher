import { FC } from "react";
import { SWRConfig } from "swr";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>watcher.kz - Следи за изменениями цен</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Мониторинг цен. Следи за товарами популярных интернет магазинов, таких как Белый Ветер, Wildberries."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://watcher.kz/" />
        <meta property="og:title" content="watcher.kz - Следи за изменениями цен" />
        <meta
          property="og:description"
          content="Мониторинг цен. Следи за товарами популярных интернет магазинов, таких как Белый Ветер, Wildberries."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="watcher.kz - Следи за изменениями цен" />
        <meta
          property="twitter:description"
          content="Мониторинг цен. Следи за товарами популярных интернет магазинов, таких как Белый Ветер, Wildberries."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2c5282" />
        <meta name="msapplication-TileColor" content="#2c5282" />
        <meta name="theme-color" content="#2c5282" />
      </Head>
      <SWRConfig
        value={{
          refreshInterval: 60000,
          fetcher: (res, init) => fetch(res, init).then((res) => res.json()),
        }}
      >
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </SWRConfig>
    </>
  );
};

export default MyApp;
