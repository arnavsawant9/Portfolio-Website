import React, { Suspense } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function RotatedRings() {
  const { scene } = useGLTF('/models/rotated-rings.glb'); // Path must be in public folder
  return <primitive object={scene} scale={1.5} />;
}

export default function RotatedRingsModel() {
  return (
    <div className="w-full h-full">
      <Canvas
  shadows
  camera={{ position: [0, 0, 5], fov: 50 }}
  style={{ background: 'linear-gradient(to right, #000, #333)', width: '100%', height: '100%' }}
>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <Suspense fallback={null}>
          <RotatedRings />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
