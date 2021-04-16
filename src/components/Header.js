import React from 'react';
import listlinks from '../data/list.js';
// import { Link } from 'gatsby'
import logo from '../data/images/alex-lee-logo-white-blackoutline.png';
import {FaAlignRight} from 'react-icons/fa';
import PDF from '../static/Alexander_Lee_Resume.pdf';

const links = listlinks.map(link => {
  // const routeLink = `/${link.href}`;

  return (
    // <Link
    //   to = {routeLink}
    //   key = {link.id}
    //   style = {{textDecoration: 'none'}}
    //   href = {link.href}
    // >
    <li key = {link.id} className = 'nav-link'>
      <a
        href = {link.href}
        style = {{
          textDecoration: 'none',
          color: '#FBEEC1'
        }}
      >
          {link.text}
      </a>
    </li>
    // </Link>

  )
})

const Header = () => {

  const showNav = () => {
    const nav = document.querySelector('.nav-list');

    nav.classList.toggle('nav-active');
    if (window.innerWidth < 1000) document.body.classList.toggle('scroll-lock');
  };

  return(
    <nav id="navbar">
      {/* <Link to = '/'> */}
      <a href = '/'>
        <img
          className = 'logo'
          src = {logo}
          alt = 'brand logo'
          style = {{
            height: '100px',
            width: '100px'
          }}
        />
      </a>
      {/* </Link> */}
      <ul className = "nav-list" onClick = {showNav}>
        {links}
        <li className = 'nav-link'>
          <a
            href = {PDF}
            target = '_blank'
            rel="noreferrer"
            // download= 'Alex_Lee_SWE_Resume.pdf'
            className = 'nav-link'
            style = {{
              textDecoration: 'none',
              color: '#FBEEC1'
            }}
          >
            Resume
          </a>
        </li>
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