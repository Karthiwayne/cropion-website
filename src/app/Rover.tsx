import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Rover({ pathLength = 7 }) {
  const ref = useRef();
  const numRows = 16; // From CropField
  const rowSpacing = 1.5;
  const colStart = -10;
  const colEnd = 50;
  const timePerRow = 30;
  const timePerTurn = 1.4;
  const timeAtStop = 0.95;
  const transitionTime = 1.3;

  useFrame((state) => {
    const fullSequence = timePerRow + 2 * timeAtStop + timePerTurn;
    const totalTime = numRows * fullSequence;
    const tRaw = state.clock.getElapsedTime() % totalTime;
    const row = Math.floor(tRaw / fullSequence);
    const tStage = tRaw - row * fullSequence;
    const isEvenRow = row % 2 === 0;
    const baseZ = -2.8 + rowSpacing * row;
    let x, z, rotY;
    if (tStage < timePerRow) {
      const prog = tStage / timePerRow;
      x = isEvenRow ? colStart + (colEnd - colStart) * prog : colEnd - (colEnd - colStart) * prog;
      z = baseZ;
      rotY = isEvenRow ? 0 : Math.PI;
    } else if (tStage < timePerRow + timeAtStop) {
      x = isEvenRow ? colEnd : colStart;
      z = baseZ;
      rotY = isEvenRow ? 0 : Math.PI;
    } else if (tStage < timePerRow + timeAtStop + timePerTurn) {
      const t = (tStage - timePerRow - timeAtStop) / timePerTurn;
      x = isEvenRow ? colEnd : colStart;
      z = baseZ;
      rotY = isEvenRow ? 0 + Math.PI * t : Math.PI - Math.PI * t;
    } else if (tStage < timePerRow + timeAtStop + timePerTurn + transitionTime) {
      const t = (tStage - (timePerRow + timeAtStop + timePerTurn)) / transitionTime;
      x = isEvenRow ? colEnd : colStart;
      z = baseZ + rowSpacing * t;
      rotY = isEvenRow ? Math.PI : 0;
    } else {
      x = isEvenRow ? colEnd : colStart;
      z = baseZ + rowSpacing;
      rotY = isEvenRow ? Math.PI : 0;
    }
    if (ref.current) {
      ref.current.position.set(x, 0.7, z);
      ref.current.rotation.y = rotY;
    }
  });

  return (
    <group ref={ref} scale={[2.7, 2.7, 2.7]} rotation={[0, Math.PI/2, 0]}>
      {/* TOP BOX - sharp long electronics cuboid, same length as legs, width matches distance outside legs */}
      <mesh castShadow position={[0, 0.22, 0]}>
        <boxGeometry args={[0.64, 0.13, 0.34]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
      {/* LEFT LEG (beam parallel to x, under box) */}
      <mesh castShadow position={[0, 0.07, -0.13 - 0.10]}>
        <boxGeometry args={[0.64, 0.11, 0.07]} />
        <meshStandardMaterial color="#175d18" />
      </mesh>
      {/* RIGHT LEG */}
      <mesh castShadow position={[0, 0.07, 0.13 + 0.10]}>
        <boxGeometry args={[0.64, 0.11, 0.07]} />
        <meshStandardMaterial color="#175d18" />
      </mesh>
      {/* FRONT LEFT WHEEL (attached to left leg) */}
      <mesh castShadow position={[-0.29, -0.015, -0.13]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.1, 14]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      {/* BACK LEFT WHEEL */}
      <mesh castShadow position={[0.29, -0.015, -0.13]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.1, 14]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      {/* FRONT RIGHT WHEEL */}
      <mesh castShadow position={[-0.29, -0.015, 0.13]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.1, 14]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      {/* BACK RIGHT WHEEL */}
      <mesh castShadow position={[0.29, -0.015, 0.13]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.1, 14]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      {/* Details: Panel seams, sensor/camera */}
      <mesh position={[0.09, 0.22, 0]}>
        <boxGeometry args={[0.04, 0.04, 0.02]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[-0.07, 0.23, 0]}>
        <cylinderGeometry args={[0.013, 0.022, 0.03, 14]} />
        <meshStandardMaterial color="#2958a3" />
      </mesh>
      {/* Add antennas, LIDAR, arms, etc. here */}
    </group>
  );
}

export default Rover;

