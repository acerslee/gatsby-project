import React from 'react';
import listlinks from './data/list.js';
import {Link} from 'react-router-dom';
import logo from '../images/alex-lee-logo.png';
import {FilterRight} from 'react-bootstrap-icons';
import PDF from '../static/Alexander_Lee_Resume.pdf';

const links = listlinks.map(link => {
  return (
    <li key = {link.id} className = 'nav-link'>
      <a href = {link.href}>{link.text}</a>
    </li>
  )
})

const showNav = () => {
  const listing = document.querySelector('.button-display');
  const nav = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-link');

  // listing.addEventListener('click', () => {
  nav.classList.toggle('nav-active');

  navLinks.forEach((link, index)=>{
      if(link.style.animation){
          link.style.animation = '';
      } else{
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 9}s`
      }
      });
  // });
};


const Header = () => (
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
      <li className="nav-link">
        <a href = {PDF} download= 'Alexander_Lee_Resume.pdf'>Resume</a>
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
);

export default Header;