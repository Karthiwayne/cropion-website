import { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Environment } from "@react-three/drei";
import CropField from "./CropField";
import Rover from "./Rover";
import CameraController from "./CameraController";
import styles from "./page.module.css";

function Ground() {
  const texture = useLoader(TextureLoader, "/soil-texture.svg");
  return (
    <mesh
      receiveShadow
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0.75 - 3 * 1.5 + 21, 0, 4.2 + 1.5 + 7]}
    >
      <planeGeometry args={[120 * 1.5, 26 * 1.5]} />
      <meshStandardMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

interface AgriField3DProps {
  cameraMode: string;
}

export default function AgriField3D({ cameraMode }: AgriField3DProps) {
  const roverPoseRef = useRef({ position: [0, 0, 0], fwd: [1, 0, 0] });

  return (
    <div className={"" + styles.heroBackground3D}>
      <Canvas camera={{ position: [-16, 6, 24], fov: 45 }} shadows style={{ top: "40px", position: "relative" }}>
        <CameraController cameraMode={cameraMode} roverPoseRef={roverPoseRef} />
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[6, 10, 5]}
          castShadow
          intensity={1.4}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        {/* Field ground with soil texture */}
        <Ground />
        <CropField />
        <Rover poseRef={roverPoseRef} />
        <Environment preset="sunset" background={false} />
      </Canvas>
    </div>
  );
}

