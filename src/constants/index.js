import bigbang from '../assets/icons/bigbang.png';
import book from '../assets/icons/book.png';
import future from '../assets/icons/future.png';
import evolution from '../assets/icons/evolution.png';
import css from '../assets/tech/css.png';
import figma from '../assets/tech/figma.png';
import git from '../assets/tech/git.png';
import html from '../assets/tech/html.png';
import javascript from '../assets/tech/javascript.png';
import mongodb from '../assets/tech/mongodb.png';
import nodejs from '../assets/tech/nodejs.png';
import reactjs from '../assets/tech/reactjs.png';
import tailwind from '../assets/tech/tailwind.png';
import threejs from '../assets/tech/threejs.svg';
import linux from '../assets/tech/linux.png';
import vm from '../assets/tech/vm.png';
import redux from '../assets/tech/redux.png';
import vite from '../assets/tech/vite.svg';
import EarthContact from '../components/canvas/EarthContact';

const experiences = [
  {
    title: 'From the beginning of Time...',
    company_name: 'Curiosity',
    icon: bigbang,
    iconBg: '#383E56',
    date: "The Beginning ['Sic Parvis Magna']",
    points: [
      'Inherently driven by curiosity, I have continuously sought to understand the inner workings of everything in my surroundings.',
      'Embarked on a journey of exploration by disassembling consoles and electronics, delving into the realm of their intricate mechanisms.',
      'Acquired self-taught expertise in hardware device repairs, encompassing both phones and computers.',
      'Infatuated with the enigmatic nature of space and its boundless expanse, I hold a deep appreciation for all aspects related to it.'
    ]
  },
  {
    title: 'The Evolution of Times',
    company_name: 'Education & Learning',
    icon: evolution,
    iconBg: '#E6DEDD',
    date: 'Present',
    points: [
      'Eagerly absorbed knowledge from diverse sources and developed proficient information-seeking skills.',
      'Recently completed a web development boot camp at Ironhack and a Network Administration Course at ITA, actively expanding my skill set.',
      'Currently pursuing a software development program in college, further enhancing my expertise.',
      'Possess expertise in JavaScript, React, Node.js, MongoDB, Git, virtual machines, networking, and Linux.'
    ]
  },
  {
    title: 'The Doer',
    company_name: 'Skills & Background',
    icon: book,
    iconBg: '#383E56',
    date: '([...past, present])',
    points: [
      'Possessing a solid grasp of both front-end and back-end development through hands-on experience with real-world projects.',
      'Proficient in pair-programming, embracing the opportunity to learn from others and never shying away from being the least knowledgeable person in the room.',
      'Acquired valuable skills in communication, organization, and customer service through prior retail experience.',
      'Capable of constructing user-friendly applications that effectively cater to the requirements of clients and end-users, backed by over 2 years of experience in no-code programming, specifically with WordPress.'
    ]
  },
  {
    title: 'Proactive Evolution',
    company_name: 'The Bright Future...',
    icon: future,
    iconBg: '#E6DEDD',
    date: '([...present, future])',
    points: [
      'Cultivating a perpetual desire for knowledge in the realms of technology, space, and various other subjects.',
      'Perpetually pushing my boundaries and striving to surpass predetermined goals.',
      'Utilizing the advantages of technology to foster a more unified and improved world.',
      " 'From this point forward, the sky has no limits to what can be achieved.' "
    ]
  }
];

const technologies = [
  /*  {
    name: 'HTML 5',
    icon: html
  }, */
  {
    name: 'Vite',
    icon: vite
  },
  /*  {
    name: 'CSS 3',
    icon: css
  }, */
  {
    name: 'JavaScript',
    icon: javascript
  },

  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux',
    icon: redux
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'figma',
    icon: figma
  },
  {
    name: 'Linux',
    icon: linux
  },
  {
    name: 'VM',
    icon: vm
  }
];

export { experiences, technologies };
