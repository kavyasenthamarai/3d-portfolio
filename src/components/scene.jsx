import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Scene = ({ modelPath }) => {
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        setModel(glb.scene);
        setLoading(false);
      },
      undefined,
      (err) => {
        setError(err);
        console.error('Error loading GLTF model:', err);
        setLoading(false);
      }
    );
  }, [modelPath]);

  if (loading) return <p>Loading 3D model...</p>;
  if (error) return <p>Error loading 3D model. Please try again later.</p>;

  return (
    <Canvas>
    <ambientLight intensity={0.5} />
    {model && <primitive object={model} />}
  </Canvas>
  
  );
};

export default Scene;
