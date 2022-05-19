import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { loadGLTFModel } from "../lib/model";

const target = new THREE.Vector3(0, 0, 0);

export default function Model(props) {
  const div = useRef();
  const [rendererState, setRendererState] = useState();
  const [camera] = useState(props.camera);

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

      const light = new THREE.PointLight(0xffffff, 1, 100, 2);
      light.power = 25;
      light.position.set(0, 5, 8);
      scene.add(light);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      let mixer;

      loadGLTFModel(scene, props.model, {
        receiveShadow: false,
        castShadow: true,
      }).then((glb) => {
        if (props.animate === true) {
          mixer = new THREE.AnimationMixer(glb.scene);
          glb.animations.forEach((clip) => {
            mixer.clipAction(clip).play();
          });
        }
        div.current.appendChild(renderer.domElement);
        animate();
      });

      if (props.orbitControls === true) {
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.0;
        controls.target = target;
      }

      let req;

      const clock = new THREE.Clock();

      function animate() {
        req = requestAnimationFrame(animate);
        if (props.animate === true) mixer.update(clock.getDelta());
        if (props.orbitControls === true) {
          controls.update();
          light.position.copy(camera.position.clone());
        }

        renderer.render(scene, camera);
      }

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, [camera, rendererState, props.animate, props.model, props.orbitControls]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [rendererState, handleWindowResize]);

  return (
    <div className={`${props.className}`}>
      <div className="h-full lg:w-1/2 lg:m-auto sm:!w-full" ref={div}></div>
    </div>
  );
}
