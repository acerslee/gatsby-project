import React from 'react';
import listlinks from '../data/list.js';
import { Link } from 'gatsby'
import logo from '../data/images/alex-lee-logo-white-blackoutline.png';
import {FaAlignRight} from 'react-icons/fa';
import PDF from '../static/Alex_Lee_SWE_Resume.pdf';

const links = listlinks.map(link => {
  const routeLink = `/${link.href}`;

  return (
    <Link
      to = {routeLink}
      key = {link.id}
      style = {{textDecoration: 'none'}}
      href = {link.href}
    >
      <li className = 'nav-link'>
        {link.text}
      </li>
    </Link>
  )
})

const Header = () => {

  const showNav = () => {
    const nav = document.querySelector('.nav-list');

    nav.classList.toggle('nav-active');
    document.body.classList.toggle('scroll-lock');
  };

  return(
    <nav id="navbar">
      <Link to = '/'>
        <img
          className = 'logo'
          src = {logo}
          alt = 'brand logo'
          style = {{
            height: '100px',
            width: '100px'
          }}
        />
      </Link>
      <ul className = "nav-list" onClick = {showNav}>
        {links}
          <a
            href = {PDF}
            target = '_blank'
            rel="noreferrer"
            // download= 'Alex_Lee_SWE_Resume.pdf'
            className = 'nav-link'
            style = {{
              marginTop: '0.35vh'
            }}
          >
            Resume
          </a>
      </ul>

      {/* only show once screen size reaches a certain width */}
      <FaAlignRight
        className = 'button-display'
        style = {{
          color: '#FBEEC1'
        }}
        onClick = {showNav}
      />
    </nav>
  )
};

export default Header;