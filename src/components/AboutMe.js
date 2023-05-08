import myImage from '../assets/img/profile.jpeg';

import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <div className="about-me-image">
                    <img src={myImage} alt="Diogo Santos" />
                  </div>
                  <div className="container">
                    <div className="about-me-text">
                      <h2 className="about-me-title">About Me</h2>
                      <p>
                        Hello and welcome to my portfolio! My name is Diogo and
                        I am a junior full-stack web developer with a passion
                        for building engaging and intuitive web applications. I
                        am a recent graduate of a 6-month web development
                        bootcamp at Ironhack, where I learned to build MERN
                        stack applications and honed my skills in both front-end
                        and back-end development. Before pursuing my passion for
                        tech, I spent several years working in retail, which
                        taught me valuable skills in communication,
                        organization, and customer service. These skills have
                        proven to be essential in my development career, where I
                        strive to build user-friendly applications that meet the
                        needs of my clients and end-users. My technical
                        expertise includes proficiency in JavaScript, React,
                        Node.js, MongoDB, and Git. I am also familiar with
                        virtualization software such as VirtualBox and VMware. I
                        have a deep understanding of Linux and networking, which
                        I developed during my experience in server installation
                        and management. In my free time, I enjoy participating
                        in coding challenges and hackathons, where I can
                        continue to challenge myself and grow as a developer. I
                        am passionate about keeping up with the latest trends
                        and technologies in the industry, and I'm always looking
                        for new opportunities to learn and expand my skillset.
                        Thank you for visiting my portfolio, and please feel
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
