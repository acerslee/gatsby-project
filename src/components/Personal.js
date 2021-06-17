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
  position: relative;
  top: 15vh;
  bottom: 15vh;
  margin: 1vw 1vw 0 2vw;
  font-size: 1.7rem;
  @media(max-width: 1400px){
    position: auto;
    top: 0vh;
    bottom: 0vh;
    text-align: center;
    width: 82%;
    margin: 0 auto 0 auto
  }
`;

const AboutParagraph = styled.p`
  @media(max-width: 700px){
    font-size: 5vw;
  }
`;

const AboutCaption = styled.h1`
  @media(max-width: 700px){
    font-size: 5.5vw;
  }
`;

const LanguageList = styled.ul`
  @media (max-width: 1400px){
    padding-left: 0;
    list-style: none;
  }

  @media (max-width: 700px){
    font-size: 5vw;
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
            Previously coming from an Operations & Project Management background, I'm a Software Engineer based out of NYC with a passion for photography and coffee. I have built projects ranging in both ends of application development. Check out more of my contents below!
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