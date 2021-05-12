import React from 'react';
import {FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';

let languageList = [
  'HTML & CSS3',
  'Javascript (Vanilla, ES6)',
  'Typescript',
  'Node.js & Express',
  'SQL (MySQL, PostgreSQL)',
  'MongoDB (Mongoose)',
  'React.js',
  'Gatsby.js'
];

let listlinks = [
  {
    text: 'About Me',
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

let data = [
  {
    href: 'https://www.linkedin.com/in/alexanderhjlee',
    icon: <FaLinkedin className = 'socials'/>
  },
  {
    href: 'https://github.com/acerslee',
    icon: <FaGithub className = 'socials'/>
  },
  {
    href: 'mailto:ahjlee712@gmail.com',
    icon: <FaEnvelope className = 'socials'/>
  }
];


//these projects will be within the projects page
// const otherProjects = [
//   {
//     id: 1,
//     heading: 'Github Repo Dashboard',
//     tools: ['React-  ', 'Node.js-  ', 'Express-  ','Github Repo API'],
//     link: 'https://github.com/acerslee/github-repo'
//   }
// ];



export {
  languageList,
  listlinks,
  data
  // otherProjects,
};