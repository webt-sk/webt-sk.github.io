import Navbar from "../Navbar";
import Head from "next/head";
import Anvil from "../Anvil";

export default function Index(props) {
  return (
    <>
      <Head>
        <title>webT</title>
      </Head>
      <Navbar otherLang={props.otherLang} otherPage={props.otherPage} />
      <main className="mt-40">
        <h1>{props.h1}</h1>
        <Anvil />
      </main>
    </>
  );
}
