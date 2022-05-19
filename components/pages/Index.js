import Model from "../3DModel";
import Layout from "../Layout";
import { PerspectiveCamera } from "three";
import Link from "next/link";
import Head from "next/head";

export default function Index(props) {
  const camera = new PerspectiveCamera(25, 1, 0.1, 1000);
  camera.position.set(0, 0.8, 3);
  return (
    <Layout
      className="flex-wrap-reverse"
      otherLang={props.otherLang}
      otherPage={props.otherPage}
    >
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <div className="w-1/2 pl-28 flex flex-col justify-center lg:w-full lg:h-1/2 lg:pl-0">
        <h1 className="dark:text-white text-black text-6xl font-bold leading-normal lg:leading-tight lg:text-center md:text-3xl md:mt-5">
          {props.h1}
          <br />
          <span className="dark:text-modra text-zelena">
            {props.h1_colored}
            <br />
            {props.h1_3rd_line}
          </span>
        </h1>
        <Link href={props.otherLang === "sk" ? "/en/contact" : "/kontakty"}>
          <a className="text-white dark:text-black bg-zelena dark:bg-modra text-sm w-fit p-4 rounded-md mt-16 lg:m-auto lg:text-sm lg:mt-5">
            {props.button}
          </a>
        </Link>
      </div>
      <Model
        className="h-full w-1/2 lg:w-full lg:h-1/2"
        model="anvil.glb"
        orbitControls={true}
        camera={camera}
      />
    </Layout>
  );
}
