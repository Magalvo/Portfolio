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

const experiences = [
  {
    title: 'From the beginning of Time...',
    company_name: 'Curiosity',
    icon: bigbang,
    iconBg: '#383E56',
    date: 'August 2000',
    points: [
      "I've always been curious about how everything worked around me",
      'Started dismantling my consoles and electronics to see how the magic happened',
      'Self-taught myself how to repair hardware devices (Phones/Computers)',
      'I love everything about space and the vastness of his uncertainty'
    ]
  },
  {
    title: 'The Evolution of Times',
    company_name: 'Education & Learning',
    icon: evolution,
    iconBg: '#E6DEDD',
    date: 'Present',
    points: [
      'Learnt everything that I could from different sources and how to look for information about it',
      'Recently graduated from a web development boot camp at Ironhack and a Network Administration Course at ITA',
      'Currently in college taking software development.',
      'Expertise in JavaScript, React, Node.js, MongoDB, Git, VMs, Networking & Linux'
    ]
  },
  {
    title: 'The Doer',
    company_name: 'Skills & Background',
    icon: book,
    iconBg: '#383E56',
    date: 'Jan 2018 - Present',
    points: [
      'Strong foundation in both front-end and back-end development with real world projects',
      'Pair-Programing Skills and the ability and the eager to learn from others. [Never be the Smartest Person in the room]',
      'Retail experience provided valuable skills in communication, organization, and customer service.',
      'Able to build user-friendly applications that meet client and end-user needs, having 2+ years of experience with no-code programing [Wordpress]'
    ]
  },
  {
    title: 'Proactive Evolution',
    company_name: 'The Bright Future...',
    icon: future,
    iconBg: '#E6DEDD',
    date: '([...present, future])',
    points: [
      'Always learning something new about technology, about space, about everything...',
      "Constantly trying to exceed myself as I'm always aiming to surpass my given objectives.",
      'Aiming to use the benefits of technology to build a better and united world',
      'From here and beyond THE SKY WAS NEVER THE LIMIT...'
    ]
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },

  {
    name: 'React JS',
    icon: reactjs
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind
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
  }
  /*   {
    name: 'Linux',
    icon: linux
  },
  {
    name: 'VM',
    icon: vms
  } */
];

export { experiences, technologies };
