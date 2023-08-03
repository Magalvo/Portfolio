import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/Verse Fight.png';
import projImg2 from '../assets/img/megatech.png';
import projImg3 from '../assets/img/espfoto.png';
import projImg4 from '../assets/img/GetInAtlas Today.png';
import projImg5 from '../assets/img/Handlebars.png';
import projImg6 from '../assets/img/Pic4Paws.png';
import projImg7 from '../assets/img/gymifyBan.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp from '../assets/img/color-sharp.png';
import comingSoon from '../assets/img/coming soon.png';

export const Projects = () => {
  const projects = [
    {
      title: 'Verse Fight',
      type: 'all',
      description: 'Canvas HTML Game',
      imgUrl: projImg1,
      link: 'https://verse-fight.netlify.app/'
    },
    {
      title: 'Spread Tax',
      type: 'all',
      description: 'Accounting Platform for Accountants & Companies',
      imgUrl: projImg5,
      link: 'https://busy-pear-catfish-sari.cyclic.app/'
    },
    {
      title: 'ESPPortal',
      type: 'arduino',
      description:
        'An ESP8266 Arduino project to draw attention to the many dangers of the internet',
      imgUrl: projImg3,
      link: 'https://github.com/Magalvo/ESPBug'
    },
    {
      title: 'Get In Atlas',
      type: 'all',
      description: 'A social network for travel enthusiasts.',
      imgUrl: projImg4,
      link: 'https://getinatlas.com'
    },
    {
      title: 'Megatech',
      type: 'nocode',
      description: 'Apple Repair Company',
      imgUrl: projImg2,
      link: 'https://megatech.pt/'
    },
    {
      title: 'Pic 4 Paws',
      type: 'all',
      description:
        'A non-profit organization that boosts the adoption of sheltered animals',
      imgUrl: projImg6,
      link: 'https://pic4paws.netlify.app'
    },
    {
      title: 'Gymify',
      type: 'all',
      description: 'Your Fitness App with Thousands of Different Exercises',
      imgUrl: projImg7,
      link: 'https://gymify-fitness.netlify.app/'
    },
    {
      title: 'Coming Soon',
      type: 'all',
      description: 'A New Idea Is Coming',
      imgUrl: comingSoon,
      link: '#'
    },
    {
      title: 'Coming Soon',
      type: 'all ',
      description: 'A New Idea Is Coming',
      imgUrl: comingSoon,
      link: '#'
    }
  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12} style={{ zIndex: '1' }}>
            <img
              className='background-image-center'
              src={colorSharp2}
              alt='right-light'
              style={{ left: '0' }}
            />
            <img
              className='background-image-center'
              src={colorSharp}
              alt='right-light'
              style={{ right: '0' }}
            />
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>Here you can see some of my projects</p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>All Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>Arduino Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>No-Code Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                        <Row>
                          {projects
                            .filter(project => project.type === 'arduino') // Replace "show" with your condition
                            .map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <Row>
                          {projects
                            .filter(project => project.type === 'nocode') // Replace "show" with your condition
                            .map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
