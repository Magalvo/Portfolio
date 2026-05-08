import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import {
  useDeferredCanvas,
  useThreePerformance
} from '../../utils/threePerformance';

const Stars = ({ paused, ...props }) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(3000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (paused || !ref.current) return;

    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [containerRef, shouldRender] = useDeferredCanvas('350px');
  const { dpr, gl, reducedMotion } = useThreePerformance();

  return (
    <div className='stars' ref={containerRef}>
      {shouldRender && (
        <Canvas
          camera={{ position: [0, 0, 1] }}
          dpr={dpr}
          frameloop={reducedMotion ? 'demand' : 'always'}
          gl={gl}
        >
          <Suspense fallback={null}>
            <Stars paused={reducedMotion} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default StarsCanvas;
