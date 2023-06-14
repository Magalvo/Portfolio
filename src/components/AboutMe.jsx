import myImage from '../assets/img/profile.jpeg';
import astronaut from '../assets/img/AstroLadoEdit.png';
import colorSharp from '../assets/img/color-sharp.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import Tech from './Tech';

import Experience from './Experience';

import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const AboutMe = () => {
  return (
    <section className='about-me' id='about'>
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <div className='about-me-image'>
                    <img src={myImage} alt='Diogo Santos' />
                  </div>
                  <Experience />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <img
            className='background-image-center-left'
            src={colorSharp}
            alt='right-light'
          />
          <img
            className='background-image-center-right'
            src={colorSharp2}
            alt='right-light'
          />
          <Tech />
        </Row>{' '}
      </Container>
      {/*  <img
        className='background-image-center'
        src={colorSharp}
        alt='right-light'
      /> */}
    </section>
  );
};
