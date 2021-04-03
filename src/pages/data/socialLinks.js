import React from 'react';
import {FaLinkedin, FaGithub, FaMedium, FaEnvelope} from 'react-icons/fa';

const data = [
  {
    id: 1,
    href: 'https://www.linkedin.com/in/alexanderhjlee',
    icon: <FaLinkedin className = 'socials'/>
  },
  {
    id: 2,
    href: 'https://github.com/acerslee',
    icon: <FaGithub className = 'socials'/>
  },
  {
    id: 3,
    href: 'https://acerslee.medium.com',
    icon: <FaMedium className = 'socials'/>
  },
  {
    id: 4,
    href: 'mailto:ahjlee712@gmail.com',
    icon: <FaEnvelope className = 'socials'/>
  }
];

export default data;