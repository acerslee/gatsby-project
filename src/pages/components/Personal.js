import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Me from '../../images/portfolio_bw.png';
import '../../styles/personal-section.css'

const PersonalSection = () => (
  <div id = "personal-section">
    <div className = "biography">
      <StaticImage
        src = '../../images/portfolio_bw.png'
        alt = 'portrait image'
        style = {{
          height: '40rem',
          width: '40rem',
          margin: 'auto'
        }}
      />
      <div className = "about_me">
        <p>I previously came from an Operations & Project Management background. Technology has always been an interest and I wanted to find a way to be creative and build new things! See my growth as a software engineer below.</p>
        <h2>Experienced, or learning the following:</h2>
        <ul className = "language_list">
          <li>HTML5 & CSS3</li>
          <li>JavaScript (Vanilla, ES6)</li>
          <li>Node.js and Express</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>React (Hooks, Jest)</li>
        </ul>
      </div>
    </div>
  </div>
);

export default PersonalSection;