import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import languageList from '../data/codingList.js';
import '../styles/personal-section.css';

const list = languageList.map(language => {
  return(
    <li key = {language.id}>
      {language.text}
    </li>
  )
});

const PersonalSection = () => {
  return(
    <div id = "personal-section">
      <div className = "biography">
        <StaticImage
          src = '../data/images/portfolio_bw.png'
          alt = 'portrait image'
          className = 'portrait-image'
          style = {{
            margin: 'auto'
          }}
          loading = 'eager'
        />
        <div className = "about_me">
          <p>I previously came from an Operations & Project Management background. Technology has always been an interest and I wanted to find a way to be creative and build new things! See my growth as a software engineer below.</p>
          <h2>Experienced, or learning the following:</h2>
          <ul className = "language_list">
            {list}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default PersonalSection;