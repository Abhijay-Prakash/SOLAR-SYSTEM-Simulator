import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; 
controls.dampingFactor = 0.25; 
controls.enableZoom = true;
controls.enablePan = true; 
controls.enableRotate = true;

const createPlanet = (size, texturePath) => {
    const geometry = new THREE.SphereGeometry(size, 92, 92);
    const texture = new THREE.TextureLoader().load(texturePath);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    return new THREE.Mesh(geometry, material);
};


const sun = createPlanet(52, 'sun.jpeg');
scene.add(sun);

const mercury = createPlanet(9, 'mercury.jpeg');
scene.add(mercury);

const venus = createPlanet(11, 'venus.jpeg');
scene.add(venus);

const earth = createPlanet(12, 'earth.jpeg');
scene.add(earth);

const mars = createPlanet(11, 'mars.jpeg');
scene.add(mars);

const jupiter = createPlanet(20, 'jupiter.jpg');
scene.add(jupiter);

const saturn = createPlanet(18, 'saturn.jpeg');
scene.add(saturn);

const uranus = createPlanet(15, 'uranus.jpeg');
scene.add(uranus);

const neptune = createPlanet(14, 'neptune.jpeg');
scene.add(neptune);


mercury.position.x = 70;
venus.position.x = 100;
earth.position.x = 150;
mars.position.x = 200;
jupiter.position.x = 300;
saturn.position.x = 400;
uranus.position.x = 500;
neptune.position.x = 600;

camera.position.z = 100;

let angle = 0;
function animate() {
    sun.rotation.y += 0.002;

    angle += 0.01;

    mercury.rotation.y += 0.004;
    venus.rotation.y += 0.002;
    earth.rotation.y += 0.01;
    mars.rotation.y += 0.008;
    jupiter.rotation.y += 0.002;
    saturn.rotation.y += 0.002;
    uranus.rotation.y += 0.003;
    neptune.rotation.y += 0.003;

    mercury.position.x = sun.position.x + (70 * Math.sin(angle));
    mercury.position.z = sun.position.z + (70 * Math.cos(angle));

    venus.position.x = sun.position.x + (100 * Math.cos(angle * 1.9));
    venus.position.z = sun.position.z + (100 * Math.sin(angle * 1.9));

    earth.position.x = sun.position.x + (150 * Math.sin(angle * 0.8));
    earth.position.z = sun.position.z + (150 * Math.cos(angle * 0.8));

    mars.position.x = sun.position.x + (200 * Math.sin(angle * 0.7));
    mars.position.z = sun.position.z + (200 * Math.cos(angle * 0.7));

    jupiter.position.x = sun.position.x + (300 * Math.sin(angle * 0.6));
    jupiter.position.z = sun.position.z + (300 * Math.cos(angle * 0.6));

    saturn.position.x = sun.position.x + (400 * Math.cos(angle * 0.5));
    saturn.position.z = sun.position.z + (400 * Math.sin(angle * 0.5));

    uranus.position.x = sun.position.x + (500 * Math.cos(angle * 0.4));
    uranus.position.z = sun.position.z + (500 * Math.sin(angle * 0.4));

    neptune.position.x = sun.position.x + (600 * Math.cos(angle * 0.3));
    neptune.position.z = sun.position.z + (600 * Math.sin(angle * 0.3));

    renderer.render(scene, camera);
}
