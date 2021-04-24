import React, { useEffect } from 'react';
import { FaChevronCircleUp } from 'react-icons/fa';
import { document } from 'browser-monads';
import styled from 'styled-components';

const UpArrow = styled(FaChevronCircleUp)`
  color: grey;
    position: fixed;
    bottom: 13vh;
    right: 5vh;
    opacity: 0.7;
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
      bottom: 14.5vh;
    };
  }
  @media(max-width: 600px){
      height: 2.5vh;
      width: 2.5vh;
      bottom: 15vh;
  }
`

const ScrollUpButton = () => {
  // var target = document.querySelector('nav')
  // var scrollToTopBtn = document.querySelector('.showBtn');
  var rootElement = document.documentElement;

  // const callback = (entries, observer) => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) scrollToTopBtn.classList.remove('showBtn')
  //     else scrollToTopBtn.classList.show('showBtn')
  //   })
  // };

  // useEffect(() => {
  //   let observer = new IntersectionObserver(callback);
  //   observer.observe(target);
  // }, [])

  const scrollToTop = () => {
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };

  return(
    <>
      <UpArrow
        className = 'showBtn'
        onClick = {scrollToTop}
      >
        </UpArrow>
    </>
  )
}

export default ScrollUpButton;