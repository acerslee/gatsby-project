import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.section`
  color: hsl(0deg 0% 49%);
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
  color: #0d1957;
  font-size: 2.5em;
  @media (max-width: 750px) {
    font-size: 1.3em;
  }
`;

const NameSpan = styled.span`
  font-size: 4em;
  @media (max-width: 1000px) {
    font-size: 2.5em;
  }
`;

const SubText = styled.p`
  font-size: 1.5em;
  @media (max-width: 750px) {
    font-size: 1.1em;
  }
`;

const Button = styled.button`
  border: 1px solid;
  background-color: transparent;
  border-color: #0d1957;
  border-radius: 5px;
  font-size: 2em;
  width: 30%;
  &: hover {
    cursor: pointer;
    background-color: hsl(230deg 50% 50% / 30%);
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: #0d1957;
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