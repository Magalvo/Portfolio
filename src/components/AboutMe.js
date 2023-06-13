import myImage from '../assets/img/profile.jpeg';
import astronaut from '../assets/img/AstroLadoEdit.png';

import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const AboutMe = () => {
  return (
    <section className='about-me' id='about'>
      <Container>
        <div className='astronaut-container'>
          <img className='astronaut-image' src={astronaut} alt='astronaut' />
        </div>
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
                  <div className='container'>
                    <div className='about-me-text'>
                      <h2 className='about-me-title'>About Me</h2>
                      <p>
                        Welcome to my portfolio! I'm Diogo, a junior full-stack
                        web developer with a passion for building engaging and
                        intuitive web applications. I recently graduated from a
                        web development bootcamp at Ironhack, specializing in
                        MERN stack applications. With expertise in JavaScript,
                        React, Node.js, MongoDB, and Git, I bring a strong
                        foundation in both front-end and back-end development.
                        Prior to entering the tech field, I gained valuable
                        skills in communication, organization, and customer
                        service through several years of experience in retail.
                        These skills now enable me to build user-friendly
                        applications that meet client and end-user needs. I also
                        have hands-on experience in server installation and
                        management, coupled with a deep understanding of Linux
                        and networking. In my free time, I enjoy participating
                        in coding challenges and hackathons to continue pushing
                        my limits and expanding my skillset. I'm always eager to
                        stay updated with the latest industry trends and
                        technologies. Thank you for visiting my portfolio! Feel
                        free to reach out to me with any questions or
                        opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
