import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/Verse Fight.png';
import projImg2 from '../assets/img/megatech.png';
import projImg3 from '../assets/img/espfoto.png';
import projImg4 from '../assets/img/GetInAtlas Today.png';
import projImg5 from '../assets/img/Handlebars.png';
import projImg6 from '../assets/img/Pic4Paws.png';
import projImg7 from '../assets/img/gymifyBan.png';
import projImg8 from '../assets/img/Minishell.png';
import projImg9 from '../assets/img/FantasticMrFox.png';
import projImg10 from '../assets/img/Cub3d.png';
import projImg11 from '../assets/img/Philosophers.png';
import projImg12 from '../assets/img/PushSwap.png';
import projImg13 from '../assets/img/LifeLink.jpg';
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
      title: 'LifeLink',
      type: 'all',
      description:
        'Connecting Rescuers and Those in Need',
      imgUrl: projImg13,
      link: 'https://lifelink.pt/'
    },
    {
      title: 'Spread Tax',
      type: 'all',
      description:
        ' CRUD Web Application || Accounting Platform for Accountants & Companies',
      imgUrl: projImg5,
      link: 'https://busy-pear-catfish-sari.cyclic.app/'
    },
    {
      title: 'Pic 4 Paws',
      type: 'all',
      description:
        'MERN Stack + Redux Web Application || A non-profit organization that promotes the adoption of sheltered animals ',
      imgUrl: projImg6,
      link: 'https://pic4paws.netlify.app'
    },
    {
      title: 'Get In Atlas',
      type: 'all',
      description: 'A social network for travel enthusiasts.',
      imgUrl: projImg4,
      link: 'https://getinatlas.com'
    },
    {
      title: 'Gymify',
      type: 'all',
      description:
        'Web Application Featuring a RESTful API || Your Fitness App with Thousands of Different Exercises',
      imgUrl: projImg7,
      link: 'https://gymify-fitness.netlify.app/'
    },
    {
      title: 'Minishell',
      type: 'all',
      description: 'A New Idea Is Coming',
      imgUrl: projImg8,
      link: 'https://github.com/Magalvo/Minishell'
    },
    {
      title: 'Fantastic Mr.Fox',
      type: 'all ',
      description: 'Mini Game using C and MiniLibX Library',
      imgUrl: projImg9,
      link: 'https://github.com/Magalvo/so_long'
    },
    {
      title: 'Cub3d',
      type: 'all ',
      description: 'A New Idea Is Coming',
      imgUrl: projImg10,
      link: 'https://github.com/diegosou4/cub3D'
    },
    {
      title: 'Philosophers',
      type: 'all ',
      description: 'The Dining Philosophers Problem | Using Threads',
      imgUrl: projImg11,
      link: 'https://github.com/Magalvo/Philosophers'
    },
    {
      title: 'PushSwap',
      type: 'all',
      description: 'Sorting Algorithm Program',
      imgUrl: projImg12,
      link: 'https://github.com/Magalvo/light_speed_sort'
    },
    {
      title: 'ESPPortal',
      type: 'arduino',
      description:
        'An ESP8266 Arduino project to draw attention to the many dangers of the internet',
      imgUrl: projImg3,
      link: 'https://github.com/Magalvo/ESPBug'
    },
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
                        <Nav.Link eventKey='first'>Main Projects</Nav.Link>
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
