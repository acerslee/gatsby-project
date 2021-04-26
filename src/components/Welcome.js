import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronCircleUp } from 'react-icons/fa';
import { document } from 'browser-monads';

const UpArrow = styled(FaChevronCircleUp)`
  color: grey;
    position: fixed;
    bottom: 13vh;
    right: 5vh;
    visibility: hidden;
    transform: translateY(100px);
    transition: all .5s ease;
    height: 4vh;
    width: 4vh;
    & :hover{
      cursor: pointer;
      color: rgb(86, 121, 218);
    };
  @media(max-width: 1200px){
      height: 3vh;
      width: 3vh;
      bottom: 16vh;
    };
  }
  @media(max-width: 600px){
      height: 2.5vh;
      width: 2.5vh;
      bottom: 15vh;
  }
`;

const WelcomeContainer = styled.section`
  color: #C2C2C2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 10vh 0 10vh 0;
  @media(max-width: 800px){
    height: 70vh;
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
  letter-spacing: 5px;
  color: #595959;
  font-size: 3vw;
  @media(max-width: 1000px){
    font-size: 2.2vw;
  }
`;

const Welcome = () => {

  var target = document.querySelector('section');
  var scrollToTopBtn = document.querySelector('.scrollToTopButton');
  var rootElement = document.documentElement;

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        scrollToTopBtn.classList.remove('showBtn')
      } else scrollToTopBtn.classList.add('showBtn')
    })
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);
    observer.observe(target);
  }, [])

  const scrollToTop = () => {
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };

  return(
    <WelcomeContainer id= "welcome-section">
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
      <UpArrow
        className = 'scrollToTopButton'
        onClick = {scrollToTop}
      >
        </UpArrow>
    </WelcomeContainer>
  );
};

export default Welcome;