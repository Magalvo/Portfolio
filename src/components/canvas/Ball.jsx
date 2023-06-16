import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture
} from '@react-three/drei';
import { MeshBasicMaterial, DoubleSide } from 'three';

import CanvasLoader from '../Loader';

const Ball = props => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={3.75} rotationIntensity={3} floatIntensity={3}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} intensity={1} />

      <group>
        {/* Front Face */}
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color='#a13682'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>

        {/* Back Face */}
        <mesh castShadow receiveShadow scale={2.75} rotation={[0, Math.PI, 0]}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
            materialOptions={{ side: DoubleSide }}
          />
        </mesh>
      </group>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} autoRotate />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
