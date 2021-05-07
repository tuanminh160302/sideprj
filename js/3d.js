//variables set up
let container, scene, camera, renderer, building, controls, controls2;

function init() {
  // container = document.querySelector('.container');

  //create scene
  scene = new THREE.Scene();

  const fov = .5;
  const aspect = (window.innerWidth) / (window.innerHeight);
  const near = 1;
  const far = 50000;

  //set up camera
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(20, 20, 50);
  scene.applyMatrix4( new THREE.Matrix4().makeTranslation(0, -0.5, 0));

  //set up light
  ambient = new THREE.AmbientLight(0x595c61, 1.5);
  scene.add(ambient);

  directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(20, 20, 10);
  directionalLight.castShadow = true;

  directionalLight.shadow.mapSize.width = 5000;
  directionalLight.shadow.mapSize.height = 5000;

  scene.add(directionalLight);

  pointLight = new THREE.PointLight(0xa1a1a1, 2);
  pointLight.position.set(0, 2000, 0)
  scene.add(pointLight);

  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth/2, window.innerHeight/2, false);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;

  container.appendChild(renderer.domElement);
  // set id for renderer
  renderer.domElement.id = 'hoodie-canvas'

  //set up controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', render);

  //smooth rotate
  controls.enableDamping = true;
  controls.dampingFactor = 0.03;
  controls.rotateSpeed = 0.7;

  //smooth zoom
  controls.enableZoom = false;

  //TrackballControls
  controls2 = new THREE.TrackballControls(camera, renderer.domElement);
  controls2.noRotate = true;
  controls2.noPan = false;
  controls2.noZoom = true;
  controls2.zoomSpeed = 0.3;
  controls2.dynamicDampingFactor = 0.05;
  controls.enablePan = false;
  
  
  function render() {
    renderer.render(scene, camera);
  }

  //Load model
  let loader = new THREE.GLTFLoader();
  loader.load("./models/scene.gltf", function (gltf) {
    building = gltf.scene.children[0];
    scene.add(gltf.scene);
    animate();
  });
}



function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
  let target = controls.target;
  controls.update();
  controls2.target.set(target.x, target.y, target.z);
  controls2.update();
}
init();



