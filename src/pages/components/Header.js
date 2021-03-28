import React from 'react';
import showNav from '../javascript/query.js';
import {Link} from 'react-router-dom';
import {StaticImage} from 'gatsby-plugin-image';
import PDF from '../../static/Alexander_Lee_Resume.pdf'
import '../../styles/nav-bar.css'

const Header = () => (
  <header id = "header">
    <nav id="navbar">
      <Link to = '/'>
        <StaticImage
          src = '../../images/alex-lee-logo.png'
          alt = 'brand logo'
          style = {{
            height: '100px',
            width: '100px'
          }}
        />
      </Link>
      <ul className = "nav-list" id="toggleMenu">
        <li className="nav-link"><a href="#personal-section">About Me</a></li>
        <li className="nav-link"><a href="#projects-section">Projects</a></li>
        <li className="nav-link"><a href="#closer">Contact</a></li>
        <li className="nav-link resume"><a href= {PDF} download= 'Alexander_Lee_Resume.pdf'>Resume</a></li>
      </ul>

      {/* only show once screen size reaches a certain width */}
      <div className="hamburger" onClick = {() => {showNav()}}>
        <div className="menu"></div>
        <div className="menu"></div>
      </div>
      {/*  */}

    </nav>
  </header>
);

export default Header;