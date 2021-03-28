import React from 'react';
import {Linkedin, Github, Newspaper, Envelope} from 'react-bootstrap-icons';
import '../../styles/footer.css'

const date = new Date().getFullYear();

const Footer = () => (
  <div id = 'closer'>

    <h1 className = 'footer-header'>Check out my socials below!</h1>
    <p className = 'footer-paragraph'>Always in the mood to chat about coding, photography, or even coffee.</p>
    <div className = 'socials-links'>
      <a
        href = 'https://www.linkedin.com/in/alexander-lee-35351374'
        rel="noreferrer"
        target = "_blank">
        <Linkedin className = 'socials'/>
      </a>
      <a
        href = 'https://github.com/acerslee'
        rel="noreferrer"
        target = "_blank">
        <Github className = 'socials'/>
      </a>
      <a
        href = 'https://acerslee.medium.com'
        rel="noreferrer"
        target = "_blank">
        <Newspaper className = 'socials' />
      </a>
      <a
        href = 'mailto:ahjlee712@gmail.com'
        rel="noreferrer"
        target = "_blank">
        <Envelope className = 'socials'/>
      </a>
    </div>
    <p className='copyright'>©{date} Designed and Built by Alex Lee</p>
  </div>
);

export default Footer;