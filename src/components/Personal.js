import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { languageList } from '../data/data.js'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const AboutContainer = styled.section`
  background-color: rgb(254 68 69);
`;

const Biography = styled.div`
  color: #edede8;
  display: flex;
  flex-direction: row;
  @media(max-width: 1440px){
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
  color: #232322;
  @media(max-width: 1440px){
    text-align: center;
    width: 82%;
    margin: 0 auto;
  }
`;

const AboutParagraph = styled.p`
  @media(max-width: 711px){
    font-size: 4vw;
  }
`;

const AboutCaption = styled.p`
  font-weight: bold;
  @media(max-width: 711px){
    font-size: 5vw;
  }
`;

const LanguageList = styled.ul`
  @media (max-width: 1440px){
    padding-left: 0;
    list-style: none;
  }

  @media (max-width: 711px){
    font-size: 4vw;
  }
`;

const list = languageList.map((language, index) => {
  return <li key={index}>{language}</li>
})

const PersonalSection = ({ node }) => {

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
            {node.node.about.about}
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

PersonalSection.propTypes = {
  node: PropTypes.object
}

export default PersonalSection
