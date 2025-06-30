import { useRef } from 'react';
import { useFrame } from "@react-three/fiber";
import Sprout from "./Sprout";

function getWindActive(row, col, time) {
  const base = Math.sin(row * 2.712 + col * 1.82 + Math.floor(time/6.9));
  return base > 0.7;
}

function CropField({ rows = 16, cols = 60, highlightRows = [] }) {
  // useRef for stable state, avoid laggy re-render
  const nowRef = useRef(0);
  useFrame(({clock}) => {
    nowRef.current = clock.getElapsedTime();
  });
  const now = nowRef.current;
  const flowers = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const pos = [col * 1.5 - (cols / 2) + 0.75 - 3 * 1.5 + 5, 0, row * 1.5 - (rows / 2) + 4.2 + 1.5];
      const cropWind = getWindActive(row, col, now);
      // If in highlightRows, highlight color
      const highlight = highlightRows.includes(row);
      flowers.push(
        <Sprout key={`sprout-${row}-${col}`} position={pos} windOffset={row * 0.6 + col * 0.4} windActive={cropWind} highlight={highlight} />
      );
    }
  }
  return (
    <group dispose={null}>
      <mesh position={[0, 1.1, 0]} scale={[cols * 1.6, 1, rows * 1.7]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial transparent opacity={0.012} side={2} />
      </mesh>
      {flowers}
    </group>
  );
}

export default CropField;

