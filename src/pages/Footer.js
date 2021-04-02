import React from 'react';
import {FaLinkedin, FaGithub, FaMedium, FaEnvelope} from 'react-icons/fa';

const date = new Date().getFullYear();

const Footer = () => (
  <div id = 'closer'>
    <h1 className = 'footer-header'>Check out my socials below!</h1>
    <p className = 'footer-paragraph'>Always in the mood to chat about coding, photography, or even coffee.</p>
    <div className = 'socials-links'>
      <a
        href = 'https://www.linkedin.com/in/alexanderhjlee'
        rel="noreferrer"
        target = "_blank">
        <FaLinkedin className = 'socials'/>
      </a>
      <a
        href = 'https://github.com/acerslee'
        rel="noreferrer"
        target = "_blank">
        <FaGithub className = 'socials'/>
      </a>
      <a
        href = 'https://acerslee.medium.com'
        rel="noreferrer"
        target = "_blank">
        <FaMedium className = 'socials' />
      </a>
      <a
        href = 'mailto:ahjlee712@gmail.com'
        rel="noreferrer"
        target = "_blank">
        <FaEnvelope className = 'socials'/>
      </a>
    </div>
    <p className='copyright'>©{date} Designed and Built by Alex Lee</p>
  </div>
);

export default Footer;