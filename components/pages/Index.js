import Head from "next/head";

import Anvil from "../Anvil";
import Navbar from "../Navbar";

export default function Index(props) {
  return (
    <>
      <Head>
        <title>webT</title>
      </Head>
      <Navbar otherLang={props.otherLang} otherPage={props.otherPage} />
      <main className="section-height flex flex-wrap-reverse">
        <div className="w-1/2 pl-28 flex flex-col justify-center lg:w-full lg:h-1/2 lg:pl-0">
          <h1 className="dark:text-white text-black text-6xl font-bold leading-normal lg:text-center">
            {props.h1}
            <br />
            <span className="dark:text-modra text-zelena">{props.h1_colored}</span>
          </h1>
        </div>
        <Anvil className="h-full w-1/2 lg:w-full lg:h-1/2" />
      </main>
    </>
  );
}
