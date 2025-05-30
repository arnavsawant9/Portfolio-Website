// components/LaptopTableModel.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const LaptopTable = () => {
  const { scene } = useGLTF("/models/laptop_table_set.glb"); // ensure this matches the filename
  return <primitive object={scene} scale={2} position={[0, -1.5, 0]} />;
};

const LaptopTableModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <LaptopTable />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default LaptopTableModel;
