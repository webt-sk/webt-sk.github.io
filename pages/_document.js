import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="sk" dir="ltr">
      <Head>
        <link rel="icon" type="image/x-icon" href="/logo_blue.svg" />
        //apple
        <meta name="apple-mobile-web-app-capable" content="yes" />
        // microsoft
        <meta name="msapplication-square70x70logo" content="/logo_blue.svg" />
        <meta name="msapplication-square150x150logo" content="/logo_blue.svg" />
        <meta name="msapplication-wide310x150logo" content="/logo_blue.svg" />
        <meta name="msapplication-square310x310logo" content="/logo_blue.svg" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="application-name" content="webT" />
        //facebook
        <meta property="og:url" content="http://webt.sk" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="webTool" />
        <meta
          property="og:description"
          content="Digitálna agentúra, ktorá sa zameriava na tvorbu web stránok, aplikácií, eshopov a podobne."
        />
      </Head>
      <body className="dark:bg-dark bg-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
