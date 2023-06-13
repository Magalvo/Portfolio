import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/editadoVirado.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import animationData from '../assets/img/PortBack.json';
import Lottie from 'lottie-react';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['Web Developer', 'Web Designer'];
  const period = 2000;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className='banner' id='home'>
      <Container>
        <div
          className='animation-container'
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            width: '100vw',
            height: '100%',
            zIndex: '0'
          }}
        >
          <Lottie
            options={defaultOptions}
            animationData={animationData}
            height={600}
            width={600}
          />
        </div>

        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7} style={{ zIndex: '1' }}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className='tagline'>Welcome to My Portfolio</span>
                  <h1>
                    {`Hi! I'm Diogo`}{' '}
                    <span
                      className='txt-rotate'
                      dataPeriod='1000'
                      data-rotate='[ "Web Developer", "Web Designer", "Network Administartor" ]'
                    >
                      <span className='wrap'>{text}</span>
                    </span>
                  </h1>
                  <p>
                    Hello and welcome, I'm an ambitious Junior Full Stack Web
                    Developer with an enourmus eager to learn new technologies
                    and diferent ways to solve my problems.
                  </p>
                  <button
                    onClick={() => console.log('connect')}
                    style={{ zIndex: '9' }}
                  >
                    Let’s Connect{' '}
                    <a
                      href='https://www.linkedin.com/in/diogomagalhaescalvo/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: 'white' }}
                    >
                      <ArrowRightCircle size={25} />
                    </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img src={headerImg} alt='Header Img' />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
