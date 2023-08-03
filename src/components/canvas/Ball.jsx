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
import { DoubleSide } from 'three';
import CanvasLoader from '../Loader';

const Ball = ({ icon }) => {
  const [decal] = useTexture([icon]);
  const { scene } = useGLTF('/Planet6.gltf');

  return (
    /*  <Float speed={1.75} rotationIntensity={2} floatIntensity={2}>
      <ambientLight intensity={0.5} color='#cc44ea' />
      <directionalLight position={[0, 0, 0.05]} intensity={1} color='#7B208E' /> */
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={1} color='#A262FF' />
      {/* color='#cc44ea' */}
      <directionalLight
        position={[0, 0, 0.05]}
        intensity={0.5}
        color='#5F20AF'
      />
      {/* color='#9f277e' */}
      <group>
        {/* Render the 3D object */}
        <mesh
          castShadow
          receiveShadow
          scale={2.75}
          geometry={scene.children[0].geometry}
          material={scene.children[0].material}
        ></mesh>
        {/* Add icons to planes */}
        <group position={[0, 0, 5.2]}>
          {/* 5.2 => Default Value (Model 6 && 8)  8.2 Model 11*/}
          <mesh castShadow receiveShadow scale={1.5}>
            <planeGeometry args={[2.5, 2.5]} />
            <meshBasicMaterial map={decal} transparent opacity={1} />
          </mesh>
        </group>
        <group position={[0, 0, -5.2]}>
          <mesh castShadow receiveShadow scale={1.5} rotation={[0, Math.PI, 0]}>
            <planeGeometry args={[2.5, 2.5]} />
            <meshBasicMaterial map={decal} transparent opacity={1} />
          </mesh>
        </group>

        <group position={[5.2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            scale={1.5}
            rotation={[0, Math.PI / 2, 0]}
          >
            <planeGeometry args={[2, 2]} />
            <meshBasicMaterial map={decal} transparent opacity={1} />
          </mesh>
        </group>
        <group position={[-5.2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            scale={1.5}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <planeGeometry args={[2, 2]} />
            <meshBasicMaterial map={decal} transparent opacity={1} />
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
          position: [-4, 0, 8]
        }}
      >
        {' '}
        {/* Camera Default Values  position: [-4, 0, 6] => model 6 && 8  //  position: [-4, 0, 10] => Model 11*/}
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
