// components/SoldierModel.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Soldier = () => {
  const { scene } = useGLTF("/models/Soldier.glb");
  return <primitive object={scene} scale={2.5} position={[0, -1.5, 0]} />;
};

const SoldierModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <Soldier />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default SoldierModel;
