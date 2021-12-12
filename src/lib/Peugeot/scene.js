import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

export const createScene = (canvas) => {
  const engine = new BABYLON.Engine(canvas, true);
  const scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color4(0.46, 0.46, 0.46, 1);

  const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0, 0, -20), scene);
  camera.setTarget(BABYLON.Vector3.Zero());
  camera.attachControl(canvas, true);

  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, -15), scene);
  light.intensity = 0.7;

  BABYLON.SceneLoader.Append("/peugeot/", "scene.glb", scene, function (scene) {
    scene.createDefaultCameraOrLight(true, true, true);

    scene.activeCamera.alpha += (Math.PI/1.2);
});

  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener('resize', () => {
    engine.resize();
  });

  return scene;
}