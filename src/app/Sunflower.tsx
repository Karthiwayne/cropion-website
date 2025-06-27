import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Sunflower({ position, windOffset = 0, windActive }) {
  const group = useRef();
  useFrame(({ clock }) => {
    if (group.current) {
      // Sway the sunflower back and forth: X or Z axis (not Y)
      const sway = windActive ? Math.sin(clock.getElapsedTime() * 2.3 + windOffset) * 0.10 : 0;
      group.current.rotation.z = sway;
      group.current.rotation.y = 0; // Do not rotate around Y axis
      // Bending effect: smoothly bend in X based on sway's direction (smoother)
      // Keep previous scale.x in a ref for lerp
      if (!group.current._lastScaleX) group.current._lastScaleX = 1;
      const desiredScaleX = 1 - sway * 0.14; // bend more on one side only
      group.current._lastScaleX += (desiredScaleX - group.current._lastScaleX) * 0.15; // smooth blend
      group.current.scale.x = group.current._lastScaleX;
    }
  });
  return (
    <group ref={group} position={position}>
      {/* Stalk */}
      <mesh castShadow receiveShadow position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.9, 14]} />
        <meshStandardMaterial color="#5fbb2d" roughness={0.35}/>
      </mesh>
      {/* Two large leaves */}
      <mesh castShadow receiveShadow position={[-0.19, 0.58, 0]} rotation={[0, -0.67, -1.14]}>
        <coneGeometry args={[0.13, 0.31, 14]} />
        <meshStandardMaterial color="#8bdd64" roughness={0.22}/>
      </mesh>
      <mesh castShadow receiveShadow position={[0.17, 0.7, 0]} rotation={[0, 0.71, 1.10]}>
        <coneGeometry args={[0.11, 0.27, 10]} />
        <meshStandardMaterial color="#7fd85a" roughness={0.24}/>
      </mesh>
      {/* Petals - 16 instanced small cones distributed in a circle */}
      {[...Array(16)].map((_, i) => {
        const angle = (i / 16) * Math.PI * 2;
        const r = 0.23; // radial distance from center
        return (
          <mesh
            key={"petal-"+i}
            castShadow
            receiveShadow
            position={[Math.cos(angle) * r, 1.04, Math.sin(angle) * r]}
            rotation={[-Math.PI / 6, angle, 0]}
            scale={[0.48, 1.6, 0.21]} // squash in X and Z for sharp oval
          >
            {/* A sharp oval shape using sphere, squashed and scaled */}
            <sphereGeometry args={[0.08, 18, 12]} />
            <meshStandardMaterial color="#FFE566" roughness={0.14} emissive="#ffe996" emissiveIntensity={0.11}/>
          </mesh>
        );
      })}
      {/* Flower head dark disc */}
      <mesh castShadow receiveShadow position={[0, 1.07, 0]}>
        <sphereGeometry args={[0.09, 16, 10]} />
        <meshStandardMaterial color="#725d41" roughness={0.37}/>
      </mesh>
    </group>
  );
}

export default Sunflower;

