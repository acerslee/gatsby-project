import React from 'react';
import showNav from './javascript/query.js';
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

const Header = () => (
  <nav id="navbar">
    <Link to = '/'>
      <img
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
      onClick = {() => showNav()}
    />
  </nav>
);

export default Header;