import Layout from "../Layout";
import Model from "../3DModel";
import { PerspectiveCamera } from "three";

export default function ONas(props) {
  const camera = new PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 3, 14);
  return (
    <>
      <Layout
        className="flex-wrap"
        otherLang={props.otherLang}
        otherPage={props.otherPage}
      >
        <div className="w-1/2 text-black dark:text-white pl-28 md:px-28 sm:!px-5 flex flex-wrap content-center md:w-full">
          <h1 className="text-5xl xl:text-3xl w-full font-bold mb-12 leading-normal">
            {props.h1}
            <br />
            {props.h1_2}
            <br />
            {props.h1_3}
          </h1>
          <p className="w-full mb-16 text-2xl xl:text-lg font-light">
            {props.p}
          </p>
          <p className="w-full text-2xl xl:text-lg font-light">{props.p2}</p>
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
