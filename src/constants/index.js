import bigbang from '../assets/icons/bigbang.png';
import fortytwo from '../assets/icons/42.png'; // Suggested new icon
import global from '../assets/icons/global.png'; // Suggested new icon for EU project
import future from '../assets/icons/future.png';
// Tech imports
import c from '../assets/tech/c.png';
import cpp from '../assets/tech/cpp.png';
import javascript from '../assets/tech/javascript.png';
import reactjs from '../assets/tech/reactjs.png';
import nodejs from '../assets/tech/nodejs.png';
import mongodb from '../assets/tech/mongodb.png';
import git from '../assets/tech/git.png';
import linux from '../assets/tech/linux.png';
import docker from '../assets/tech/dockers.png'
import kub from '../assets/tech/kub.png'
import post from '../assets/tech/postgres.png'
import figma from '../assets/tech/figma.png'
import cs from '../assets/tech/cs.png'

const experiences = [
  {
    title: 'The Spark of Curiosity',
    company_name: 'Origins',
    icon: bigbang,
    iconBg: '#383E56',
    date: "The Beginning ['Sic Parvis Magna']",
    points: [
      'Inherently driven by curiosity, seeking to understand the inner workings of hardware and electronics.',
      'Self-taught expertise in hardware repair, focusing on the intricate mechanisms of phones and computers.',
      'Deeply inspired by the enigmatic nature of space and the boundless potential of technology.'
    ]
  },
  {
    title: 'Algorithmic Genesis',
    company_name: '42 Lisboa',
    icon: fortytwo,
    iconBg: '#E6DEDD',
    date: 'August 2023 - Present',
    points: [
      'Immersed in an intensive Software Engineering program, mastering low-level programming with C and C++.',
      'Developing complex systems and algorithms through a rigorous peer-to-peer learning methodology.',
      'Solving intricate technical challenges while balancing deep-dive engineering with a collaborative mindset.'
    ]
  },
  {
    title: 'The Sentinel (Student Supervisor)',
    company_name: '42 Lisboa Mentorship',
    icon: fortytwo,
    iconBg: '#383E56',
    date: 'February 2025 - April 2025',
    points: [
      'Served as a Junior Lifeguard, supporting over 400 "Pisciners" through an intensive, month-long selection process.',
      'Guided candidates through complex project instructions and debugging, fostering a culture of peer learning.',
      'Strengthened leadership and interpersonal skills by encouraging persistence during highly demanding technical trials.'
    ]
  },
  {
    title: 'Global Synthesis (International Researcher)',
    company_name: 'EU-Funded Project: STUDIES-DIG',
    icon: global,
    iconBg: '#E6DEDD',
    date: 'March 2025 - April 2025',
    points: [
      'Conducted an international secondment in Sofia, Bulgaria, researching the digital transformation of higher education.',
      'Analyzed socio-economic and cultural barriers to digital adoption through field visits and policy analysis.',
      'Collaborated with an international team of stakeholders to draft comprehensive reports on institutional findings.'
    ]
  },
  {
    title: 'Proactive Evolution',
    company_name: 'The Bright Future...',
    icon: future,
    iconBg: '#383E56',
    date: 'Present & Beyond',
    points: [
      'Cultivating a perpetual desire for knowledge in the realms of low-level engineering, digitalization, and space.',
      'Pushing boundaries to bridge the gap between technical research and real-world implementation.',
      " 'From this point forward, the sky has no limits to what can be achieved.' "
    ]
  }
];

const technologies = [
  {
    name: 'C',
    icon: c
  },
  {
    name: 'C++',
    icon: cpp
  },
  {
    name: 'C# .NET',
    icon: cs
  },
  {
    name: 'Docker',
    icon: docker
  },
  {
    name: 'Kubernetes',
    icon: kub
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'PostgreSQL',
    icon: post
  },
  {
    name: 'Linux',
    icon: linux
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'figma',
    icon: figma
  },
];

export { experiences, technologies };