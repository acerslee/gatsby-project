import React from 'react';
import listlinks from '../data/list.js';
import { Link } from 'gatsby'
import logo from '../data/images/alex-lee-logo-white-blackoutline.png';
import {FilterRight} from 'react-bootstrap-icons';
// import Sidebar from 'react-sidebar';
import PDF from '../static/Alexander_Lee_Resume.pdf';

const links = listlinks.map(link => {
  const routeLink = `/${link.href}`
  return (
    <Link
      to = {routeLink}
      key = {link.id}
      style = {{textDecoration: 'none'}}
    >
      <li className = 'nav-link'>
       <a href = {link.href} className = 'header-links'>{link.text}</a>
      </li>
    </Link>

  )
})

const showNav = () => {
  const nav = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-link');

  nav.classList.toggle('nav-active');

  navLinks.forEach((link, index)=>{
    if (link.style.animation) link.style.animation = '';
    link.style.animation = `navLinkFade 0.1s ease forwards ${index / 20}s`
    });
};

const Header = () => {

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
      <ul className = "nav-list" id="toggleMenu">
        {links}
        <li className="nav-link pdf">
          <a
            href = {PDF}
            download= 'Alexander_Lee_Resume.pdf'
            className = 'header-links'
          >
            Resume
          </a>
        </li>
      </ul>

      {/* only show once screen size reaches a certain width */}
      <FilterRight
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