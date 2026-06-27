import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NODE_COLORS = ['#2563eb', '#06b6d4', '#f59e0b', '#844fba', '#10b981'];
const NODE_COUNT = 18;
const EDGE_MAX_DIST = 2.5;

function fibonacciSphere(count, radius) {
  const points = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    points.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(radius));
  }
  return points;
}

function buildEdgeGeometry(nodes, maxDist) {
  const positions = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].distanceTo(nodes[j]) < maxDist) {
        positions.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
      }
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
  return geometry;
}

function NodeGraph() {
  const groupRef = useRef();
  const reducedMotion = useMemo(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
    []
  );
  const nodes = useMemo(() => fibonacciSphere(NODE_COUNT, 3.2), []);
  const edgeGeometry = useMemo(() => buildEdgeGeometry(nodes, EDGE_MAX_DIST), [nodes]);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group || reducedMotion) return;
    group.rotation.y += delta * 0.07;
    const { pointer } = state;
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, pointer.y * 0.18, 0.04);
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={edgeGeometry}>
        <lineBasicMaterial color="#38bdf8" transparent opacity={0.16} />
      </lineSegments>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <icosahedronGeometry args={[0.11, 0]} />
          <meshStandardMaterial
            color={NODE_COLORS[i % NODE_COLORS.length]}
            emissive={NODE_COLORS[i % NODE_COLORS.length]}
            emissiveIntensity={1.6}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function InfraScene() {
  return (
    <Canvas
      className="infra-canvas"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8.5], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[6, 4, 6]} intensity={50} color="#60a5fa" />
      <pointLight position={[-6, -4, -4]} intensity={30} color="#06b6d4" />
      <NodeGraph />
    </Canvas>
  );
}
