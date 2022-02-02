import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.section`
  background-color: #000000;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  @media(max-width: 750px){
    height: 65vh;
  }
`;

const ContentContainer = styled.div`
  width: 65%;
  margin: 0 auto;
`;

const IntroText = styled.p`
  font-family: 'Roboto Condensed';
  font-size: 2.5em;
  @media (max-width: 750px) {
    font-size: 1.3em;
  }
`;

const NameSpan = styled.span`
  font-weight: 700;
  font-size: 4em;
  @media (max-width: 1000px) {
    font-size: 2.5em;
  }
`;

const SubText = styled.p`
  font-family: 'Roboto Condensed';
  font-size: 1.5em;
  @media (max-width: 750px) {
    font-size: 1.1em;
  }
`;

const Button = styled.button`
  font-family: 'Roboto Condensed';
  background-color: hsl(230deg 50% 50% / 14%);
  border-color: transparent;
  padding: 0.2em 0;
  border-radius: 5px;
  font-size: 2em;
  width: 30%;
  &: hover {
    cursor: pointer;
    background-color: hsl(230deg 78% 36% / 14%);
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: hsl(209, 34%, 14%);
`;

const Welcome = () => {

  return(
    <WelcomeContainer
      id= 'welcome-section'
      aria-label = 'intro to give webpage a pop'
    >
      <ContentContainer>
        <IntroText>Hello World! My name is
          <br />
          <NameSpan>Alex Lee</NameSpan>
        </IntroText>
        <SubText>I'm a Software Engineer based out of New York City. I have an interest for Web Development, but I am always willing to explore
          the limitless opportunities within engineering.
        </SubText>
        <Button>
          <ContactLink href = '#contact'>
            Contact Me
          </ContactLink>
        </Button>
      </ContentContainer>
    </WelcomeContainer>
  );
};

export default Welcome;