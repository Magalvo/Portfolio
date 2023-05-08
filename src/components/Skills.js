import meter1 from '../assets/img/webdevround.png';
import meter2 from '../assets/img/uxui rounded.png';
import meter3 from '../assets/img/networks.png';
import meter4 from '../assets/img/graphical.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from '../assets/img/arrow1.svg';
import arrow2 from '../assets/img/arrow2.svg';
import colorSharp from '../assets/img/color-sharp.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

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

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Some of my main tech skills.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="WebDev" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="UX/UI" />
                  <h5>UX/UI</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Networking" />
                  <h5>Networking</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Graphical Design" />
                  <h5>Graphical Design</h5>
                </div>
              </Carousel>
              <div className="otherskills">
                <h5>JavaScript ES6</h5>
                <h5>MongoDB</h5> <h5>Express.js</h5>
                <h5>React.js</h5>
                <h5>Node.js</h5> <h5>Linux</h5> <h5>Git</h5>{' '}
                <h5>Virtualization</h5> <h5>DOM</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="right-light"
      ></img>
    </section>
  );
};
