import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { languageList } from '../data/data.js';
import styled from 'styled-components';

const AboutContainer = styled.section`
  height: 100vh;
  margin: 0 auto 10vh auto;
  background-color: #0d1957;
  @media(max-width: 1400px){
    height: 100%;
  }
`;

const Biography = styled.div`
  color: #edede8;
  display: flex;
  flex-direction: row;
  @media(max-width: 1400px){
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const AboutMe = styled.div`
  width: 45%;
  margin: 0vw 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2.3em;
  @media(max-width: 1400px){
    text-align: center;
    width: 82%;
    margin: 0 auto;
  }
`;

const AboutParagraph = styled.p`
  @media(max-width: 700px){
    font-size: 4vw;
  }
`;

const AboutCaption = styled.p`
  font-weight: bold;
  @media(max-width: 700px){
    font-size: 5vw;
  }
`;

const LanguageList = styled.ul`
  @media (max-width: 1400px){
    padding-left: 0;
    list-style: none;
  }

  @media (max-width: 700px){
    font-size: 4vw;
  }
`;

const list = languageList.map((language, index) => {
  return <li key = {index}>{language}</li>
});

const PersonalSection = () => {

  return(
    <AboutContainer
      id = "about"
      aria-label = 'introduction and tools I know'
    >
      <Biography>
        <StaticImage
          src = '../data/images/portfolio_bw.png'
          alt = 'self portrait'
          loading = 'lazy'
          className = 'portrait-image'
        />
        <AboutMe>
          <AboutParagraph>
            I've worked with multiple early-stage startups, and helped initialized applications.
            I have built projects with Full Stack Javascript, and I have a desire to continously
            learn new tools to improve my abilities as an engineer! Check out more of my contents below!
          </AboutParagraph>
          <AboutCaption>
            Experienced with the following:
          </AboutCaption>
          <LanguageList>
            {list}
          </LanguageList>
        </AboutMe>
      </Biography>
    </AboutContainer>
  );
};

export default PersonalSection;