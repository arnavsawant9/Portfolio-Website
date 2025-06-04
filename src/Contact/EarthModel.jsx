import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Earth = () => {
  const earth = useGLTF('/models/earth.glb'); // Put earth.glb inside public/models/

  return (
    <primitive 
      object={earth.scene} 
      scale={3.5}         // Nicely scaled
      position={[0, 0, 0]} // Centered properly
    />
  );
};

const EarthModel = () => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} autoRotate />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthModel;
