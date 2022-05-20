import Layout from "../Layout";
import Model from "../3DModel";
import { PerspectiveCamera } from "three";
import Head from "next/head";

export default function ONas(props) {
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 3, 14);
  return (
    <>
      <Layout
        className="flex-wrap"
        otherLang={props.otherLang}
        otherPage={props.otherPage}
      >
        <Head>
          <title>{props.title}</title>
          <meta name="description" content={props.description} />
        </Head>
        <div className="w-1/2 text-black dark:text-white pl-28 md:px-28 sm:!px-5 flex flex-wrap content-center md:w-full">
          <h1 className="text-3xl xl:text-3xl xl:leading-normal w-full font-bold mb-7 leading-normal">
            <span className="text-5xl dark:text-modra text-zelena">{props.h1}</span>
            <br />
            {props.h1_2}
            <br />
            {props.h1_3}
          </h1>
          <p className="w-full mb-12 text-lg xl:text-lg font-light">
            {props.p}
          </p>
          <p className="w-full text-lg xl:text-lg font-light">{props.p2}</p>
        </div>
        <Model
          className="h-full w-1/2 md:w-full"
          model="/fire.glb"
          camera={camera}
          animate={true}
        />
      </Layout>
    </>
  );
}
