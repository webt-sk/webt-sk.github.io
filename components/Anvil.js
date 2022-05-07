import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { loadGLTFModel } from "../lib/model";

export default function Anvil(props) {
  const div = useRef();
  const target = new THREE.Vector3(0, 0, 0);
  const [rendererState, setRendererState] = useState();
  const [camera] = useState(new THREE.PerspectiveCamera(25, 1, 0.1, 1000));

  const handleWindowResize = useCallback(() => {
    if (div.current && rendererState) {
      rendererState.setSize(div.current.clientWidth, div.current.clientHeight);
      camera.aspect = div.current.clientWidth / div.current.clientHeight;
      camera.updateProjectionMatrix();
    }
  }, [camera, rendererState]);

  useEffect(() => {
    if (div.current && !rendererState) {
      const scene = new THREE.Scene();
      // const camera = new THREE.PerspectiveCamera(
      //   35,
      //   div.current.clientWidth / div.current.clientHeight,
      //   0.1,
      //   1000
      // );
      camera.aspect = div.current.clientWidth / div.current.clientHeight;
      camera.updateProjectionMatrix();
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(div.current.clientWidth, div.current.clientHeight);
      renderer.shadowMap.enabled = true;
      setRendererState(renderer);

      camera.position.z = 3;
      camera.position.y = 0.8;

      const light = new THREE.PointLight(0xffffff, 1, 100, 2);
      light.power = 30;
      light.position.set(-10, 10, 19);
      scene.add(light);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

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

      let req;

      function animate() {
        req = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      }
      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  });

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [rendererState, handleWindowResize]);

  return (
    <div className={`${props.className}`}>
      <div className="h-full lg:w-1/2 lg:m-auto anvil-inner" ref={div}></div>
    </div>
  );
}
