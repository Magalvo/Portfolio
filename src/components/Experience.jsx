import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { experiences } from '../constants/index';
import colorSharp from '../assets/img/color-sharp.png';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRIght: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='expIcon'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='iconImg'
        />
      </div>
    }
  >
    <div>
      <h3 className='h3Experience'>{experience.title}</h3>
      <p className='expP' style={{ margin: '0' }}>
        {experience.company_name}
      </p>
    </div>
    <ul className='expUl'>
      {experience.points.map((point, index) => (
        <li className='expLi' key={`experience-point-${index}`}>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What about me?</p>
        <h1 className={`${styles.sectionHeadText} text-center`}>
          <b>Who is Magalvo?</b>
        </h1>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
