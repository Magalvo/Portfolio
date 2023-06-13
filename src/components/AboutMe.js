import myImage from '../assets/img/profile.jpeg';
import astronaut from '../assets/img/AstroLadoEdit.png';
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
        </Row>
      </Container>
    </section>
  );
};
