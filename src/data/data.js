import React from 'react';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';

export const languageList = [
  'HTML5 & CSS3',
  'Javascript (Vanilla, ES6+)',
  'Typescript',
  'Styling (Bootstrap, Tailwind, Styled Components)',
  'Node.js & Express',
  'SQL (MySQL, PostgreSQL)',
  'MongoDB (Mongoose)',
  'Front-end Tools (React, Redux, Next)',
  'React Native',
  'Deployment Tools (Firebase, Netlify, Heroku)'
];

export const listlinks = [
  {
    text: 'About',
    href: '#about',
  },
  {
    text: 'Projects',
    href: '#projects',
  },
  {
    text: 'Contact',
    href: '#contact',
  }
];

export const data = [
  {
    href: 'https://www.linkedin.com/in/alexanderhjlee',
    icon: <FaLinkedin className = 'socials' aria-label = 'LinkedIn'/>
  },
  {
    href: 'https://github.com/acerslee',
    icon: <FaGithub className = 'socials' aria-label = 'Github'/>
  },
  {
    href: 'mailto:ahjlee712@gmail.com',
    icon: <FaEnvelope className = 'socials' aria-label = 'Email'/>
  }
];