import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   document.querySelector("html").style.backgroundImage =
  //     "url(/background_dark.svg)";
  // });

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      enableColorScheme={false}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
