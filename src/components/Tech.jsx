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
        gap: '10px',
        position: 'relative',
        height: '100%' // Add height: 100% to ensure the container expands vertically
      }}
    >
      {technologies.map((technology, index) => (
        <div
          style={{
            width: '50px',
            height: '50px',
            position: 'absolute',
            top: `${Math.random() * 80 + 10}%`, // Randomize the top position between 10% and 90%
            left: `${Math.random() * 80 + 10}%` // Randomize the left position between 10% and 90%
          }}
          key={index}
        >
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
