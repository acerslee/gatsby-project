import React, { useState } from 'react';
import { listlinks } from '../data/data.js';
import logo from '../data/images/alex-lee-logo-white-blackoutline.png';
import { FaTimes, FaBars } from 'react-icons/fa';
import PDF from '../static/AlexLee_SWE_Resume.pdf';
import styled from 'styled-components';

const NavLink = styled.a`
  text-decoration: none;
  color: #595959;
  @media(max-width: 1000px){
    color: #FFFFFF;
    font-size: 2.5rem;
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  const showNav = () => {
    setOpen(!open);
    const nav = document.querySelector('nav');
    const navList = document.querySelector('.nav-list');

    nav.classList.toggle('nav-active');
    navList.classList.toggle('navItem-reveal')
    if (window.innerWidth < 1000) document.body.classList.toggle('scroll-lock');
  };

  const links = listlinks.map((link, index) => {
    return (
      <li key = {index} className = 'nav-link'>
        <NavLink
          href = {link.href}
          onClick = {showNav}
          onKeyDown = {showNav}>
          {link.text}
        </NavLink>
      </li>
    )
  });

  return(
    <section id="navbar">
      <a href = '/'>
        <img
          className = 'logo'
          src = {logo}
          alt = 'brand logo'
          style = {{
            height: '80px',
            width: '80px'
          }}
        />
      </a>
      <nav>
        <ul className = "nav-list">
          {links}
          <li className = 'nav-link'>
            <NavLink
              href = {PDF}
              target = '_blank'
              rel="noreferrer"
              onClick = {showNav}
              onKeyDown = {showNav}
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* only show once screen size reaches a certain width */}
      {!open &&
        <FaBars
          className = 'button-display'
          style = {{
            color: '#595959'
          }}
          onClick = {showNav}
          onKeyDown = {showNav}
        />
      }
      {open &&
        <FaTimes
          className = 'button-display'
          style = {{
            color: 'white'
          }}
          onClick = {showNav}
          onKeyDown = {showNav}
        />
      }
    </section>
  )
};

export default Header;