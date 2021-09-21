import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.section`
  color: #C2C2C2;
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media(max-width: 800px){
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
`;

const NameSpan = styled.span`
  font-size: 5em;
`;

const SubText = styled.p`
  font-size: 1.5em;
`;

const Button = styled.button`
  border: 1px solid;
  background-color: transparent;
  border-color: #0d1957;
  color: #0d1957;
  border-radius: 5px;
  font-size: 2em;
  width: 20%;
  &: hover {
    cursor: pointer;
    background-color: hsl(230deg 50% 50%);
  }
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
        <Button>Contact Me</Button>
      </ContentContainer>
    </WelcomeContainer>
  );
};

export default Welcome;