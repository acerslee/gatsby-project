import React, { useState, useEffect } from 'react';
import { listlinks } from '../data/data.js';
import logo from '../data/images/alex-lee-logo-white-blackoutline.png';
import { FaTimes, FaBars, FaChevronCircleUp } from 'react-icons/fa';
import PDF from '../static/AlexLee_SWE_Resume.pdf';
import styled from 'styled-components';
import { document } from 'browser-monads';

const HeaderContainer = styled.header`
  display:flex;
  justify-content: space-around;
  align-items: flex-end;
  min-height: 3vh;
`;

const UpArrow = styled(FaChevronCircleUp)`
  color: grey;
    position: fixed;
    z-index: 5;
    bottom: 13vh;
    right: 5vh;
    visibility: hidden;
    transform: translateY(100px);
    transition: all .5s ease;
    height: 4vh;
    width: 4vh;
    & :hover{
      cursor: pointer;
      color: rgb(86, 121, 218);
    };
  @media(max-width: 1200px){
      height: 4vh;
      width: 4vh;
      bottom: 18vh;
    };
  }
  @media(max-width: 600px){
      height: 3vh;
      width: 3vh;
  }
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

  let rootElement = document.documentElement;

  useEffect(() => {
    let target = document.querySelector('header');
    let scrollToTopBtn = document.querySelector('.scrollToTopButton');

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          scrollToTopBtn.classList.remove('showBtn')
        } else scrollToTopBtn.classList.add('showBtn')
      })
    };

    let observer = new IntersectionObserver(callback);
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
      <UpArrow
        className = 'scrollToTopButton'
        onClick = {scrollToTop}
      >
      </UpArrow>
    </HeaderContainer>
  )
};

export default Header;