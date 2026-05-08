import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';
import {
  useDeferredCanvas,
  useThreePerformance
} from '../../utils/threePerformance';

const Ball = ({ icon, reducedMotion }) => {
  const [decal] = useTexture([icon]);
  const { scene } = useGLTF('/Planet6.gltf');

  return (
    <Float
      speed={reducedMotion ? 0 : 1.75}
      rotationIntensity={reducedMotion ? 0 : 1}
      floatIntensity={reducedMotion ? 0 : 2}
    >
      <ambientLight intensity={1} color='#A262FF' />
      <directionalLight
        position={[0, 0, 0.05]}
        intensity={0.5}
        color='#5F20AF'
      />
      <group>
        <mesh
          scale={2.75}
          geometry={scene.children[0].geometry}
          material={scene.children[0].material}
        />
        <group position={[0, 0, 5.2]}>
          <mesh scale={1.5}>
            <planeGeometry args={[2.5, 2.5]} />
            <meshBasicMaterial map={decal} transparent opacity={1} />
          </mesh>
        </group>
        <group position={[0, 0, -5.2]}>
          <mesh scale={1.5} rotation={[0, Math.PI, 0]}>
            <planeGeometry args={[2.5, 2.5]} />
            <meshBasicMaterial map={decal} transparent opacity={1} />
          </mesh>
        </group>
        <group position={[5.2, 0, 0]}>
          <mesh scale={1.5} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry args={[2, 2]} />
            <meshBasicMaterial map={decal} transparent opacity={1} />
          </mesh>
        </group>
        <group position={[-5.2, 0, 0]}>
          <mesh scale={1.5} rotation={[0, -Math.PI / 2, 0]}>
            <planeGeometry args={[2, 2]} />
            <meshBasicMaterial map={decal} transparent opacity={1} />
          </mesh>
        </group>
      </group>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [containerRef, shouldRender] = useDeferredCanvas('300px');
  const { autoRotate, dpr, gl, reducedMotion } = useThreePerformance();

  return (
    <div ref={containerRef} style={{ aspectRatio: '1 / 1', width: '100%' }}>
      {shouldRender && (
        <Canvas
          style={{ height: '100%', width: '100%' }}
          frameloop={autoRotate ? 'always' : 'demand'}
          dpr={dpr}
          gl={gl}
          camera={{
            fov: 100,
            near: 0.1,
            far: 250,
            position: [-4, 0, 8]
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} autoRotate={autoRotate} />
            <Ball icon={icon} reducedMotion={reducedMotion} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default BallCanvas;
