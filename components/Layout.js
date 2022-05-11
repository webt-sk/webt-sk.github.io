import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>webT</title>
      </Head>
      <Navbar otherLang={props.otherLang} otherPage={props.otherPage} />
      <main className="section-height flex flex-wrap-reverse">
        {props.children}
      </main>
    </>
  );
}
