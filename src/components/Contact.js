import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import navIcon1 from '../assets/img/linkedbranco.png';
import navIcon2 from '../assets/img/git icon.png';
import navIcon3 from '../assets/img/twitter branco.png';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                  src={contactImg}
                  alt="Contact Me"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Get In Touch</h2>
                  <div className="d-flex">
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={navIcon1} alt="LinkedIn" className="nav-icon" />
                    </a>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={navIcon2} alt="GitHub" className="nav-icon" />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={navIcon3} alt="Twitter" className="nav-icon" />
                    </a>
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
