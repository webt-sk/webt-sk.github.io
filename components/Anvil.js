import { useEffect, useRef } from "react";
import * as THREE from "three";

import { loadGLTFModel } from "../lib/model";

export default function Anvil() {
  const div = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    camera.position.z = 3;

    // const light = new THREE.PointLight(0xffffff, 1, 100, 2);
    // light.power = 50;
    // light.position.set(-10, 10, 19);
    // scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(-10, 10, 19);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    loadGLTFModel(scene, "/anvil.glb", {
      receiveShadow: false,
      castShadow: true,
    }).then(() => {
      div.current.appendChild(renderer.domElement);
      renderer.render(scene, camera);
    });
  });

  return <div ref={div}></div>;
}
