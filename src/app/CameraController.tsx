import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

import { useRef } from "react";
const CameraController = ({ cameraMode, roverPoseRef }) => {
  const targetPosition = new Vector3();
  const targetLookAt = new Vector3();

  useFrame((state) => {
    let roverPose = roverPoseRef?.current;
    if (cameraMode === "followRover" && roverPose) {
      // place camera behind and slightly above rover
      const roverVec = new Vector3(...roverPose.position);
      // offset: -4 in rover's fwd, +2 up
      const forward = roverPose.fwd ? new Vector3(...roverPose.fwd) : new Vector3(1, 0, 0);
      const offsetBack = forward.clone().multiplyScalar(-4);
      offsetBack.y = 2; // up
      targetPosition.copy(roverVec.clone().add(offsetBack));
      targetLookAt.copy(roverVec);
    } else if (cameraMode === "front") {
      targetPosition.set(0, 0, 24);
      targetLookAt.set(0, 0, 0);
    } else {
      targetPosition.set(-16, 6, 24);
      targetLookAt.set(0, 5, 0);
    }
    state.camera.position.lerp(targetPosition, 0.08);
    state.camera.lookAt(targetLookAt);
  });
  return null;
};
export default CameraController;

