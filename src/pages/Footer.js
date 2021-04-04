import React from 'react';
import data from './data/socialLinks.js'

const date = new Date().getFullYear();

const renderData = data.map(datalink => {
  return(
    <a
      key = {datalink.id}
      href = {datalink.href}
      rel = 'noreferrer'
      target = '_blank'
    >
       {datalink.icon}
    </a>
  )
});

const Footer = () => (
  <div
    id = 'closer'
    style = {{
      paddingTop: '2rem',
      margin: '0 auto 0 auto',
      textAlign: 'center'
    }}
  >
    <h1
      className = 'footer-header'
      style = {{
        fontSize: '5vh'
      }}
    >
      Check out my socials below!</h1>
    <div
      className = 'socials-links'
      style = {{
        width: '50%',
        display: 'flex',
        justifyContent: 'space-around',
        margin: '2rem auto 2rem auto'
      }}
    >
      {renderData}
    </div>
    <p
      className='copyright'
      style = {{
        fontFamily: 'Courier New',
        fontSize: '1vw',
        textAlign: 'center'
      }}
    >
      ©{date} Designed and Built by Alex Lee</p>
  </div>
);

export default Footer;