import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { loadGLTFModel } from "../lib/model";

export default function Anvil() {
  const div = useRef();
  const target = new THREE.Vector3(0, 0, 0);

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
    camera.position.y = 0.8;

    const light = new THREE.PointLight(0xffffff, 1, 100, 2);
    light.power = 48;
    light.position.set(-10, 10, 19);
    scene.add(light);

    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    // scene.add(ambientLight);

    // const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    // directionalLight.position.set(-10, 10, 19);
    // directionalLight.castShadow = true;
    // scene.add(directionalLight);

    loadGLTFModel(scene, "/anvil.glb", {
      receiveShadow: false,
      castShadow: true,
    }).then(() => {
      div.current.appendChild(renderer.domElement);
      animate();
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.target = target;

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
  });

  return <div ref={div}></div>;
}
