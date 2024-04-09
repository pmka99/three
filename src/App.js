import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { materialBody, materialWheel, materialRotor, materialDoor, materialBody2 } from './colors';

function App() {
  var el = useRef();

  useEffect(() => {



    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xBCBBBB);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 7, 20); // Adjust the values as needed
    camera.lookAt(scene.position);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
    scene.add(ambientLight);

    // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    // directionalLight.position.set(1, 1, 1);
    // scene.add(directionalLight);




    const geometry = new THREE.BoxGeometry(1000, 1, 1000);
    const material = new THREE.MeshBasicMaterial({ color: 0x1e3e7f });
    const cube = new THREE.Mesh(geometry, material);

    const geometry2 = new THREE.BoxGeometry(5, 5, 5);
    const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cube2 = new THREE.Mesh(geometry2, material2);

    cube.position.set(-100, -100, 0)
    scene.add(cube);
    // scene.add(cube2);

    console.log(window.devicePixelRatio, "pixel ratio");

    const axesHelper = new THREE.AxesHelper(10)
    scene.add(axesHelper)

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(1 * window.innerWidth, 1 * window.innerHeight);
    el.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    const a = new THREE.Euler(0, 1, 0, 'XYZ');

    const loader = new GLTFLoader();
    var heli;
    loader.load('/models/heli/3dpea.gltf', function (gltf) {



      heli = gltf.scene;
      heli.scale.set(0.1, 0.1, 0.1); // Adjust the scale as needed
      // console.log(gltf);
      let children = heli.children[0].children
      // console.log(children);
      heli.position.set(0, 0, 0)
      for (const i of children) {
        console.log(i.name)
        if (i.name === "Body") {
          // console.log("yyyyyyyyyyyyy");
          i.material = materialBody
        } else if (i.name.includes("Wheel")) {
          console.log("Applying material to wheel:", i.name);
          i.material = materialWheel;
        } else if (i.name.includes("Door")) {
          // console.log(i.name);
          i.material = materialDoor;
        } else if (i.name.includes("Rotor")) {
          // console.log(i);
          i.position.set(0, 0, 0)
          i.material = materialRotor;
        } else if (i.name.includes("Body_14") || i.name.includes("Body_8")) {
          // console.log(i);
          // i.material = materialBody2;
        } else {
          console.log(i.name);
        }
      }
      //body14 8 7

      scene.add(gltf.scene);

    }, undefined, function (error) {

      console.error(error);

    });

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      // if (heli)
      // heli.rotation.y += 0.002;
      if (heli && heli.children[0].children) {
        // heli.rotation.y += 0.02
        var center = new THREE.Vector3(0, 0, 0);
        // heli.getCenter(center);
        heli.position.sub(center);
        for (const i of heli.children[0].children) {
          if (i.name.includes("TopRotor")) {
            // i.getCenter(i.position)
            // heli.position.set(0, 0, 0)
            console.log(i);
            // i.position.sub(center);
            // let offset = new THREE.Vector3(0, 5, 0);
            // i.rotateOnWorldAxis(offset, 0.5)

            // i.getCenter(offset);
            i.rotation.y += 0.01
            // i.setRotationFromMatrix(a);
          }
        }
      }

      renderer.render(scene, camera);
    }
    animate();



    return () => {
      // clearTimeout(timer);
    }

  }, [])

  return (
    <div className="App">
      <div style={{ widows: window.innerWidth, height: window.innerHeights }} ref={el} />
    </div>
  );
}

export default App;
