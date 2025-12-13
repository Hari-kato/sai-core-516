import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Building component
const Building = ({ position, height, color }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={position} castShadow>
      <boxGeometry args={[1, height, 1]} />
      <meshStandardMaterial
        color={color}
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  );
};

// Crane component
const Crane = ({ position }) => {
  const craneRef = useRef();

  useFrame((state) => {
    if (craneRef.current) {
      craneRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={craneRef} position={position}>
      {/* Crane base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 0.5, 8]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>
      {/* Crane tower */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[0.15, 4, 0.15]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>
      {/* Crane arm */}
      <mesh position={[1.5, 4, 0]}>
        <boxGeometry args={[3, 0.1, 0.1]} />
        <meshStandardMaterial color="#ea580c" />
      </mesh>
      {/* Counter weight */}
      <mesh position={[-0.8, 3.8, 0]}>
        <boxGeometry args={[0.5, 0.3, 0.3]} />
        <meshStandardMaterial color="#dc2626" />
      </mesh>
    </group>
  );
};

// Ground plane
const Ground = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#374151" opacity={0.3} transparent />
    </mesh>
  );
};

// Main scene
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, 10, -10]} intensity={0.5} color="#f59e0b" />

      <Ground />

      {/* Buildings */}
      <Building position={[-3, 1.5, -2]} height={3} color="#1f2937" />
      <Building position={[-1, 2.5, 0]} height={5} color="#374151" />
      <Building position={[1, 2, -1]} height={4} color="#1f2937" />
      <Building position={[3, 1.8, 1]} height={3.5} color="#4b5563" />
      <Building position={[-2, 1.2, 2]} height={2.5} color="#374151" />

      {/* Crane */}
      <Crane position={[0, 0, 3]} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [8, 6, 8], fov: 50 }}
        shadows
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero3D;
