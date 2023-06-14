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
        gap: '10px'
      }}
    >
      {technologies.map(technology => (
        <div style={{ width: '50px', height: '50px' }} key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
