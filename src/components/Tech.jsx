import React from 'react';

import BallCanvas from './canvas/Ball';
import { SectionWrapper } from '../hoc/index';
import { technologies } from '../constants/index';

const Tech = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '50px',
        position: 'relative',
        height: '100%',
        width: '100%' // Add height: 100% to ensure the container expands vertically
      }}
    >
      {technologies.map(technology => (
        <div
          style={{ width: '150px', height: 'auto', marginTop: '100px' }}
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
