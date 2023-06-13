import meter1 from '../assets/img/webdevround.png';
import meter2 from '../assets/img/uxui rounded.png';
import meter3 from '../assets/img/networks.png';
import meter4 from '../assets/img/graphical.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

import React from 'react';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    'JavaScript ES6',
    'MongoDB',
    'Express.js',
    'React.js',
    'Node.js',
    'Linux',
    'Git',
    'Virtualization',
    'DOM'
  ];

  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <p>Some of my main tech skills.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='owl-carousel owl-theme skill-slider'
                autoPlay={true}
                autoPlaySpeed={3000} // Change the delay between transitions
              >
                <div className='item'>
                  <img src={meter1} alt='WebDev' />
                  <h5>Web Development</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt='UX/UI' />
                  <h5>UX/UI</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt='Networking' />
                  <h5>Networking</h5>
                </div>
                <div className='item'>
                  <img src={meter4} alt='Graphical Design' />
                  <h5>Graphical Design</h5>
                </div>
              </Carousel>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={`otherskills ${
                      isVisible ? 'animate__animated animate__fadeIn' : ''
                    }`}
                  >
                    {skills.map((skill, index) => (
                      <h5 key={index}>{skill}</h5>
                    ))}
                  </div>
                )}
              </TrackVisibility>
            </div>
          </div>
        </div>
      </div>
      <img className='background-image-left' src={colorSharp} alt='Image' />
      <img
        className='background-image-right'
        src={colorSharp2}
        alt='right-light'
      />
    </section>
  );
};
