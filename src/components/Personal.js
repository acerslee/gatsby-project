import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import languageList from '../data/codingList.js';
import styled from 'styled-components';

const PersonalContainer = styled.div`
  height: 100%;
  padding-top: 2rem;
  margin: 0 auto 10vh auto;
  background-color: #0d1957;
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
  margin: 1vw 1vw 0 1vw;
  font-size: 1.7rem;
  @media(max-width: 1400px){
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

const AboutCaption = styled.h2`
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

const list = languageList.map(language => {
  return(
    <li key = {language.id}>
      {language.text}
    </li>
  )
});

const PersonalSection = () => {

  return(
    <PersonalContainer id = "personal-section">
      <Biography>
        <StaticImage
          src = '../data/images/portfolio_bw.png'
          alt = 'self portrait'
          loading = 'eager'
          style = {{
            height: '100%',
            width: '30vw',
            margin: '0 auto 0 auto',
            '@media(maxWidth: 700px)' : {
              height: '50vw',
              width: '50vw',
            }
          }}
        />
        <AboutMe>
          <AboutParagraph>
              Originally from a Operations & Project Management background, I'm a Software Engineer based out of NYC with a passion for photography and coffee. I have built projects that consist of either front-end, back-end or full-stack. Check out more of my contents below!
          </AboutParagraph>
          <AboutCaption>
            Experienced, or learning the following:
          </AboutCaption>
          <LanguageList>
            {list}
          </LanguageList>
        </AboutMe>
      </Biography>
    </PersonalContainer>
  );
};

export default PersonalSection;