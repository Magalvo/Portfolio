import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';
import {
  useDeferredCanvas,
  useThreePerformance
} from '../../utils/threePerformance';

const Earth = () => {
  const earth = useGLTF('/planet/scene.gltf');

  return (
    <primitive object={earth.scene} scale={2.0} position-y={0} rotation-y={0} />
  );
};

const EarthContact = () => {
  const [containerRef, shouldRender] = useDeferredCanvas();
  const { autoRotate, dpr, gl } = useThreePerformance();

  return (
    <div ref={containerRef} style={{ height: '100vh' }}>
      {shouldRender && (
        <Canvas
          style={{ height: '100%' }}
          frameloop={autoRotate ? 'always' : 'demand'}
          dpr={dpr}
          gl={gl}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6]
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate={autoRotate}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default EarthContact;
