import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>webT</title>
      </Head>
      <Navbar otherLang={props.otherLang} otherPage={props.otherPage} />
      <main
        className={`section-height flex ${props.className}`}
      >
        {props.children}
      </main>
    </>
  );
}
