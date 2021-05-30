import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.section`
  color: #C2C2C2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 10vh 0 10vh 0;
  @media(max-width: 800px){
    height: 65vh;
  }
`;

const Box = styled.div`
  border-style: solid;
  border-width: 10px;
  font-size: 8vw;
  background: linear-gradient(to top, #b3b2b2, #00416A);
  text-align: center;
  margin-bottom: 1.5vh;
`;

const BoxText = styled.p`
  letter-spacing: 10px;
  padding: 0 3.5vw 0 3.5vw;
  color: #eeeeee !important;
  @media(max-width: 1000px){
    font-size: 10vw;
  }
`;

const WelcomeText = styled.p`
  letter-spacing: 3px;
  color: #595959;
  font-size: 3vw;
  @media(max-width: 1000px){
    font-size: 2.2vw;
  }
`;

const Welcome = () => {

  return(
    <WelcomeContainer
      id= 'welcome-section'
      aria-label = 'intro to give webpage a pop'
    >
      <Box>
        <BoxText>
          ALEX
          <br />
          LEE
        </BoxText>
      </Box>
      <WelcomeText>
        SOFTWARE ENGINEER / PHOTOGRAPHER
      </WelcomeText>
    </WelcomeContainer>
  );
};

export default Welcome;