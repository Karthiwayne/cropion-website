import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

// A sprout: just a short stem and tiny leaves
export default function Sprout({ position, windOffset = 0, windActive, highlight = false }) {
  const group = useRef();
  useFrame(({ clock }) => {
    if (group.current) {
      const sway = windActive ? Math.sin(clock.getElapsedTime() * 2.3 + windOffset) * 0.13 : 0;
      group.current.rotation.z = sway;
      group.current.rotation.y = 0;
    }
  });
  return (
    <group ref={group} position={position}>
      {/* Tall stalk (doubled height) */}
      <mesh castShadow receiveShadow position={[0, 0.14, 0]}>
        <cylinderGeometry args={[0.026, 0.033, 0.28, 8]} />
        <meshStandardMaterial color={highlight ? "#00eb96" : "#3d9b3c"} roughness={0.42}/>
      </mesh>
      {/* Two larger, consistent leaves, both at same height */}
      <mesh castShadow receiveShadow position={[-0.046, 0.27, 0]} rotation={[0, 0.34, -0.64]}>
        <sphereGeometry args={[0.047, 13, 9]} />
        <meshStandardMaterial color="#85e37a" roughness={0.15}/>
      </mesh>
      <mesh castShadow receiveShadow position={[0.044, 0.27, 0]} rotation={[0, -0.22, 0.61]}>
        <sphereGeometry args={[0.047, 13, 9]} />
        <meshStandardMaterial color="#60b85d" roughness={0.15}/>
      </mesh>
    </group>
  );
}

