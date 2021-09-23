import React, { useState, useEffect } from 'react';
import { listlinks } from '../data/data.js';
import logo from '../data/images/alex-lee-logo-white-blackoutline.png';
import { FaTimes } from '@react-icons/all-files/fa/FaTimes';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import PDF from '../static/AlexLee_SWE_Resume.pdf';
import styled from 'styled-components';
import { document } from 'browser-monads';
import { UpArrow } from '../sc-elements/elemnets';

const HeaderContainer = styled.header`
  display:flex;
  justify-content: space-around;
  align-items: flex-end;
  min-height: 3vh;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.5rem;
  color: #595959;
  &: hover{
    color: rgb(250, 193, 87);
  }
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

  const rootElement = document.documentElement;

  useEffect(() => {
    const target = document.querySelector('header');
    const scrollToTopBtn = document.querySelector('.scrollToTopButton');

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          scrollToTopBtn.classList.remove('showBtn')
        } else scrollToTopBtn.classList.add('showBtn')
      })
    };

    const observer = new IntersectionObserver(callback);
    observer.observe(target);
  }, [])

  const scrollToTop = () => {
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    window.history.pushState({}, null, '/')
  };

  return(
    <HeaderContainer id="navbar">
      <a href = '/'>
        <img
          className = 'logo'
          src = {logo}
          alt = 'brand logo'
          style = {{
            height: '90px',
            width: '90px'
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
          style = {{ color: '#595959' }}
          onClick = {showNav}
          onKeyDown = {showNav}
        />
      }
      {open &&
        <FaTimes
          className = 'button-display'
          style = {{ color: 'white' }}
          onClick = {showNav}
          onKeyDown = {showNav}
        />
      }
      <UpArrow
        className = 'scrollToTopButton'
        onClick = {scrollToTop}
      >
      </UpArrow>
    </HeaderContainer>
  )
};

export default Header;