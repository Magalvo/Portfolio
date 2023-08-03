import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AboutMe } from './components/AboutMe';
import StarsCanvas from './components/canvas/Stars';
import Tech from './components/Tech';
import EarthContact from './components/canvas/EarthContact';
import Planet from './components/canvas/Planet';
import EarthFlames from './components/canvas/EarthFlames';

function App() {
  return (
    <div className='App'>
      <NavBar />

      <div style={{ position: 'relative', zIndex: '0' }}>
        <Banner />
        <StarsCanvas />
      </div>

      <div style={{ position: 'relative', zIndex: '0' }}>
        <AboutMe />
      </div>

      <Skills />
      {/*       <EarthContact /> */}

      <div style={{ position: 'relative', zIndex: '0' }}>
        <Projects />
        <StarsCanvas />
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
