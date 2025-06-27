import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const CameraController = ({ cameraMode }) => {
  const targetPosition = new Vector3();
  const targetLookAt = new Vector3();

  useFrame((state) => {
    if (cameraMode === "front") {
      targetPosition.set(0, 0, 24); // X=0, Y=0, Z=24 (same Z as angled mode)
      targetLookAt.set(0, 0, 0);
    } else {
      targetPosition.set(-16, 6, 24);
      targetLookAt.set(0, 5, 0);
    }

    state.camera.position.lerp(targetPosition, 0.02);
    state.camera.lookAt(targetLookAt);
  });

  return null;
};

export default CameraController;

