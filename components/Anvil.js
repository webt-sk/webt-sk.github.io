import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Anvil() {
  const scene = new THREE.Scene();
  const refContainer = useRef();
  const loader = new GLTFLoader();

  useEffect(() => {
    const ambientLight = new THREE.AmbientLight(0xcccccc, 5);
    scene.add(ambientLight);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(3, 10, 1);

    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    refContainer.current.appendChild(renderer.domElement);

    loader.load(
      "/anvil.glb",
      (glb) => {
        const obj = glb.scene;
        obj.position.y = 0;
        obj.position.x = 0;
        obj.scale.set(500, 500, 500);
        scene.add(obj);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    renderer.render(scene, camera);
  }, []);

  return <div ref={refContainer}></div>;
}
