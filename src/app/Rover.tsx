import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { useMemo } from "react";
import * as THREE from "three";

function Rover({ poseRef }) {
  const ref = useRef();
  const leftRollerRef = useRef();
  const rightRollerRef = useRef();

  // Animate rollers when moving using useFrame
  useFrame((state, delta) => {
    // Detect if moving: for simplicity, spin when not stopped
    // If you have a better indicator, replace the below logic
    const tRaw = state.clock.getElapsedTime() % (timePerRow + 2*timeAtStop + timePerTurn);
    const moving = tRaw < timePerRow;
    if (moving) {
      const speed = 6.0;
      if (leftRollerRef.current) leftRollerRef.current.rotation.z += speed * delta;
      if (rightRollerRef.current) rightRollerRef.current.rotation.z += speed * delta;
    }
  })
  // Traverse only the 4 center rows in a single pass (for implements/tires logic)
  // const allRows = 16; // From CropField
  const rowSpacing = 2;
  const groupRows = [6, 7, 8, 9]; // zero-based indices for 4 central rows
  // const groupRowSpan = groupRows.length;
  // Rover Z will be centered between rows 7 and 8
  const zTrackCenter = (-2.8 + rowSpacing * 7 + -2.8 + rowSpacing * 8) / 3.27;
  // For future extension: path logic can generalize to multiple groups
  const numTraverses = 1; // 1 pass over the group
  const colStart = -10;
  const colEnd = 50;
  const timePerRow = 30;
  const timePerTurn = 1.4;
  const timeAtStop = 0.95;
  const transitionTime = 1.3;

  useFrame((state) => {
    const fullSequence = timePerRow + 2 * timeAtStop + timePerTurn;
    const totalTime = numTraverses * fullSequence;
    const tRaw = state.clock.getElapsedTime() % totalTime;
    const seqIndex = Math.floor(tRaw / fullSequence);
    // Only one group: groupRows
    const tStage = tRaw - seqIndex * fullSequence;
    const isEvenRow = seqIndex % 2 === 0;
    // For 4-row operation, z should be between middle two rows
    const baseZ = zTrackCenter;
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
      // const t = (tStage - timePerRow - timeAtStop) / timePerTurn;
      x = isEvenRow ? colEnd : colStart;
      z = baseZ;
      rotY = isEvenRow ? 0 + Math.PI * t : Math.PI - Math.PI * t;
    } else if (tStage < timePerRow + timeAtStop + timePerTurn + transitionTime) {
      // const t = (tStage - (timePerRow + timeAtStop + timePerTurn)) / transitionTime;
      x = isEvenRow ? colEnd : colStart;
      z = baseZ;
      rotY = isEvenRow ? Math.PI : 0;
    } else {
      x = isEvenRow ? colEnd : colStart;
      z = baseZ;
      rotY = isEvenRow ? Math.PI : 0;
    }
    if (ref.current) {
      ref.current.position.set(x, .4, z);
      ref.current.rotation.y = rotY;
      if (poseRef) {
        const fwd = [Math.cos(rotY), 0, Math.sin(rotY)];
        // For visualization, export the groupRows handled here
        poseRef.current = { position: [x, 0, z], fwd, activeRows: groupRows };
      }
      // Spin rollers only while moving
      if (leftRollerRef.current && rightRollerRef.current) {
        // Estimate delta from time/frame
        if (tStage < timePerRow) {
          const spinSpeed = 6.5; // radians/sec
          leftRollerRef.current.rotation.x += spinSpeed * state.clock.getDelta();
          rightRollerRef.current.rotation.x += spinSpeed * state.clock.getDelta();
        }
      }
    }
  });

  // Create rectangular truncated pyramid geometry ONCE using useMemo.
  const geometry = useMemo(() => {
    const bottomWidth = 0.41;
    const bottomLength = 0.64;
    const topWidth = 0.41;
    const topLength = 0.84;
    const height = 0.13;
    const hw1 = bottomWidth / 2, hl1 = bottomLength / 2;
    const hw2 = topWidth / 2, hl2 = topLength / 2;
    const h = height / 2;
    // Vertices: 0-3=bottom, 4-7=top
    const vertices = [
      -hw1, -h, -hl1,
       hw1, -h, -hl1,
       hw1, -h,  hl1,
      -hw1, -h,  hl1,
      -hw2,  h, -hl2,
       hw2,  h, -hl2,
       hw2,  h,  hl2,
      -hw2,  h,  hl2,
    ];
    const indices = [
      // bottom
      0,1,2, 0,2,3,
      // top
      4,6,5, 4,7,6,
      // sides
      0,4,5, 0,5,1,
      1,5,6, 1,6,2,
      2,6,7, 2,7,3,
      3,7,4, 3,4,0,
    ];
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(vertices),3));
    g.setIndex(indices);
    g.computeVertexNormals();
    return g;
  }, []);

  return (
    <group ref={ref} scale={[2.7, 2.7, 3.3]} rotation={[0, 0, 0]}>
      {/* Enlarged angled body */}
      <mesh geometry={geometry} castShadow position={[0, 0.330, 0]} rotation={[0, Math.PI/2, 0]}>
        <meshStandardMaterial color="#fff" />
      </mesh>
      <lineSegments position={[0, 0.330, 0]} rotation={[0, Math.PI/2, 0]}>
        <edgesGeometry attach="geometry" args={[geometry]} />
        <lineBasicMaterial color="#888888" linewidth={2} />
      </lineSegments>

      {/* Solar panel setup on roof (centered, slightly raised, blue-black grid) */}
      <mesh position={[0, 0.41, 0]} rotation={[0, -25, 0]} castShadow>
        <boxGeometry args={[0.38, 0.025, 0.55]} />
        <meshStandardMaterial color="#183982" roughness={0.15} metalness={0.51} />
      </mesh>
      {/* Panel grid lines (for a solar look, simple white lines) */}
      {[...Array(5)].map((_, i) => (
        <mesh key={`solpanel-v-${i}`} position={[-0.19 + i*0.095, 0.424, 0]} rotation={[0, -25, 0]}>
          <boxGeometry args={[0.01, 0.025, 0.55]} />
          <meshStandardMaterial color="#bcd3e6" metalness={0.49} />
        </mesh>
      ))}
      {[...Array(6)].map((_, i) => (
        <mesh key={`solpanel-h-${i}`} position={[0, 0.424, -0.275 + i*0.11]} rotation={[0, -25, 0]}>
          <boxGeometry args={[0.38, 0.025, 0.01]} />
          <meshStandardMaterial color="#bcd3e6" metalness={0.49} />
        </mesh>
      ))}

      {/* Black box (battery/electronics) below rover body */}
      <mesh castShadow position={[0, 0.19, 0]} rotation={[0, Math.PI/2, 0]}>
        <boxGeometry args={[0.41, 0.14, 0.64]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      {/* Wires: red and black (simple bent cylinders) */}
      {/* Red wire (front left to top of box) */}
      <mesh position={[-0.06, 0.11, 0.04]} rotation={[Math.PI / 2.14, 0, Math.PI / 14]}>
        <cylinderGeometry args={[0.006, 0.006, 0.13, 13]} />
        <meshStandardMaterial color="#ea1f1f" />
      </mesh>
      {/* Black wire (rear right to top of box) */}
      <mesh position={[0.06, 0.11, -0.04]} rotation={[Math.PI / 2.2, 0, -Math.PI / 12]}>
        <cylinderGeometry args={[0.006, 0.006, 0.13, 13]} />
        <meshStandardMaterial color="#18191c" />
      </mesh>
      {/* TIRES WITH GREEN WHEELS */}
      {/* FRONT LEFT TIRE */}
      <group position={[-0.29, -0.015, -0.36]}>
        <mesh castShadow rotation={[Math.PI/2, 0, 0]}>
          <cylinderGeometry args={[0.13, 0.13, 0.12, 18]} />
          <meshStandardMaterial color="#222" />
        </mesh>
        {/* Green wheel inside tire */}
        <mesh rotation={[Math.PI/2, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.13, 22]} />
          <meshStandardMaterial color="#22fd6b" emissive="#429c37" emissiveIntensity={0.32} />
        </mesh>
      </group>
      {/* BACK LEFT TIRE */}
      <group position={[0.29, -0.015, -0.36]}>
        <mesh castShadow rotation={[Math.PI/2, 0, 0]}>
          <cylinderGeometry args={[0.13, 0.13, 0.12, 18]} />
          <meshStandardMaterial color="#222" />
        </mesh>
        <mesh rotation={[Math.PI/2, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.13, 22]} />
          <meshStandardMaterial color="#22fd6b" emissive="#429c37" emissiveIntensity={0.32} />
        </mesh>
      </group>
      {/* FRONT RIGHT TIRE */}
      <group position={[-0.29, -0.015, 0.36]}>
        <mesh castShadow rotation={[Math.PI/2, 0, 0]}>
          <cylinderGeometry args={[0.13, 0.13, 0.12, 18]} />
          <meshStandardMaterial color="#222" />
        </mesh>
        <mesh rotation={[Math.PI/2, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.13, 22]} />
          <meshStandardMaterial color="#22fd6b" emissive="#429c37" emissiveIntensity={0.32} />
        </mesh>
      </group>
      {/* BACK RIGHT TIRE */}
      <group position={[0.29, -0.015, 0.36]}>
        <mesh castShadow rotation={[Math.PI/2, 0, 0]}>
          <cylinderGeometry args={[0.13, 0.13, 0.12, 18]} />
          <meshStandardMaterial color="#222" />
        </mesh>
        <mesh rotation={[Math.PI/2, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.13, 22]} />
          <meshStandardMaterial color="#22fd6b" emissive="#429c37" emissiveIntensity={0.32} />
        </mesh>
      </group>
      {/* LEGS DIRECTLY ABOVE TIRES, AND LINKS (simple vertical beams and links) */}
      {/* LEFT LEG */}
      <mesh castShadow position={[0, 0.11, -0.36]}>
        <boxGeometry args={[0.64, 0.08, 0.09]} />
        <meshStandardMaterial color="#175d18" />
      </mesh>
      {/* RIGHT LEG */}
      <mesh castShadow position={[0, 0.11, 0.36]}>
        <boxGeometry args={[0.64, 0.08, 0.09]} />
        <meshStandardMaterial color="#175d18" />
      </mesh>
      {/* Shaft connecting tiller blades to green legs (left and right) */}
      <mesh position={[0, 0.03, -0.36]}>
        <cylinderGeometry args={[0.018, 0.018, 0.57, 16]} />
        <meshStandardMaterial color="#186032" />
      </mesh>
      <mesh position={[0, 0.03, 0.36]}>
        <cylinderGeometry args={[0.018, 0.018, 0.57, 16]} />
        <meshStandardMaterial color="#186032" />
      </mesh>
      {/* Tiller blades at ends of shaft (left/right, both front and back) */}
      <mesh position={[-0.26, 0.03, -0.36]} rotation={[0, 0, Math.PI/2]}>
        <boxGeometry args={[0.14, 0.028, 0.09]} />
        <meshStandardMaterial color="#85613b" />
      </mesh>
      <mesh position={[0.26, 0.03, -0.36]} rotation={[0, 0, Math.PI/2]}>
        <boxGeometry args={[0.14, 0.028, 0.09]} />
        <meshStandardMaterial color="#85613b" />
      </mesh>
      <mesh position={[-0.26, 0.03, 0.36]} rotation={[0, 0, Math.PI/2]}>
        <boxGeometry args={[0.14, 0.028, 0.09]} />
        <meshStandardMaterial color="#85613b" />
      </mesh>
      <mesh position={[0.26, 0.03, 0.36]} rotation={[0, 0, Math.PI/2]}>
        <boxGeometry args={[0.14, 0.028, 0.09]} />
        <meshStandardMaterial color="#85613b" />
      </mesh>
      {/* SUSPENSIONS: Connect black box and legs */}
      {/* Left front suspension */}
      <mesh position={[-0.26, 0.17, -0.26]} rotation={[Math.PI / 4, 2, Math.PI / 9]}>
        <cylinderGeometry args={[0.019, 0.019, 0.14, 9]} />
        <meshStandardMaterial color="#222" metalness={0.3} roughness={0.32}/>
      </mesh>
      {/* Right front suspension */}
      <mesh position={[0.26, 0.17, -0.26]} rotation={[Math.PI / 4, 2, -Math.PI / 9]}>
        <cylinderGeometry args={[0.019, 0.019, 0.14, 9]} />
        <meshStandardMaterial color="#222" metalness={0.3} roughness={0.32}/>
      </mesh>
      {/* Left rear suspension */}
      <mesh position={[-0.26, 0.17, 0.26]} rotation={[Math.PI / 2, -2, -Math.PI / 9]}>
        <cylinderGeometry args={[0.019, 0.019, 0.14, 9]} />
        <meshStandardMaterial color="#222" metalness={0.3} roughness={0.32}/>
      </mesh>
      {/* Right rear suspension */}
      <mesh position={[0.26, 0.17, 0.26]} rotation={[Math.PI / 2, 2, Math.PI / 9]}>
        <cylinderGeometry args={[0.019, 0.019, 0.14, 9]} />
        <meshStandardMaterial color="#222" metalness={0.3} roughness={0.32}/>
      </mesh>
     

      {/* Antenna (thin black rod, offset toward front-left, with a red tip) */}
      <mesh position={[-0.15, 0.41, 0.11]}>
        <cylinderGeometry args={[0.005, 0.005, 0.23, 13]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      {/* Cylinder roller made only of rods under the black box (below basket tiller area) */}
      <group ref={leftRollerRef} position={[0, -0.05, -.16]}>
        {/* Roller spine */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 0.29, 18]} />
          <meshStandardMaterial color="#676767" />
        </mesh>
        {/* Rods across the roller: 10 spaced rods */}
        {[...Array(10)].map((_, i) => (
          <mesh key={i} position={[0, 0, 0]} rotation={[0, 0, (i * Math.PI) / 10]}>
            <cylinderGeometry args={[0.008, 0.008, 0.22, 8]} />
            <meshStandardMaterial color="#bababa" />
          </mesh>
        ))}
      </group>
      <group ref={rightRollerRef} position={[0, -0.05, .16]}>
        {/* Roller spine */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 0.29, 18]} />
          <meshStandardMaterial color="#676767" />
        </mesh>
        {/* Rods across the roller: 10 spaced rods */}
        {[...Array(10)].map((_, i) => (
          <mesh key={i} position={[0, 0, 0]} rotation={[0, 0, (i * Math.PI) / 10]}>
            <cylinderGeometry args={[0.008, 0.008, 0.22, 8]} />
            <meshStandardMaterial color="#bababa" />
          </mesh>
        ))}
      </group>
      {/* You can add arms or more accessories here */}
    </group>
  );
}

export default Rover;

