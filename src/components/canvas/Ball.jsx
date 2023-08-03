import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  useGLTF
} from '@react-three/drei';
import { DoubleSide, MeshBasicMaterial, PlaneGeometry } from 'three';
import CanvasLoader from '../Loader';

const Ball = ({ icon }) => {
  const [decal] = useTexture([icon]);
  const { scene } = useGLTF('/Planet6.gltf');

  return (
    /*  <Float speed={1.75} rotationIntensity={2} floatIntensity={2}>
      <ambientLight intensity={0.5} color='#cc44ea' />
      <directionalLight position={[0, 0, 0.05]} intensity={1} color='#7B208E' /> */
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} intensity={1} />

      <group>
        {/* Render the 3D object */}
        <mesh
          castShadow
          receiveShadow
          scale={2.75}
          geometry={scene.children[0].geometry}
          material={scene.children[0].material}
        />

        {/* Add icons to planes */}
        <group position={[0, 0, 5.2]}>
          <mesh castShadow receiveShadow scale={1.5} rotation={[0, Math.PI, 0]}>
            <planeGeometry args={[2, 2]} />
            <meshBasicMaterial
              map={decal}
              side={DoubleSide}
              transparent
              opacity={0.5}
            />
          </mesh>
        </group>

        <group position={[0, 0, 5.2]}>
          <mesh castShadow receiveShadow scale={1.5} rotation={[Math.PI, 0, 0]}>
            <planeGeometry args={[2, 2]} />
            <meshBasicMaterial
              map={decal}
              side={DoubleSide}
              transparent
              opacity={0.5}
            />
          </mesh>
          <mesh castShadow receiveShadow scale={1.5} rotation={[Math.PI, 0, 0]}>
            <planeGeometry args={[2, 2]} />
            <meshBasicMaterial
              map={decal}
              side={DoubleSide}
              transparent
              opacity={0.5}
            />
          </mesh>
        </group>
      </group>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <div style={{ height: 'auto', width: 'auto' }}>
      <Canvas
        style={{ height: 'auto', width: '100%' }}
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 100,
          near: 0.1,
          far: 250,
          position: [-4, 3, 6]
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} autoRotate />
          <Ball icon={icon} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
