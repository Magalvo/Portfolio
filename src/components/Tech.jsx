import React, { Suspense, lazy } from 'react';

import { SectionWrapper } from '../hoc/index';
import { technologies } from '../constants/index';
import { useDeferredCanvas } from '../utils/threePerformance';

const BallCanvas = lazy(() => import('./canvas/Ball'));

const Tech = () => {
  const [containerRef, shouldRender] = useDeferredCanvas('500px');

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px',
        position: 'relative',
        height: '100%'
        //width: '100%' // Add height: 100% to ensure the container expands vertically
      }}
    >
      {technologies.map(technology => (
        <div
          style={{ width: '100px', height: '100px', marginTop: '100px' }}
          key={technology.name}
        >
          {shouldRender && (
            <Suspense fallback={null}>
              <BallCanvas icon={technology.icon} />
            </Suspense>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
