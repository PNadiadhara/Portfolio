import './style.css'
import * as THREE from 'three';

//https://threejs.org/docs/index.html#api/en/scenes/Scene
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera)

//https://threejs.org/docs/index.html?q=geo#api/en/geometries/BoxGeometry
const geometry = new THREE.BoxGeometry(7,11,2);
const material = new THREE.MeshStandardMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//https://threejs.org/docs/index.html?q=point#api/en/lights/PointLight
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5)


const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper)

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.005;
  cube.rotation.z += 0.01;
  renderer.render(scene, camera);
}

animate()