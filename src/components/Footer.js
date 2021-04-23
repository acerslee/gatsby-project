import React, { useEffect, useRef } from 'react';
import data from '../data/socialLinks.js';
import { FaChevronCircleUp } from 'react-icons/fa';
import { document } from 'browser-monads';
import styled from 'styled-components';

const date = new Date().getFullYear();

const FooterContainer = styled.footer`
  background-color: #0d1957;
  display: flex;
  justify-content: center;
`;

const MiniContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
`

const FooterLinks = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-evenly;
`;

const Copyright = styled.h6`
  font-size: 1.6vh;
  text-align: left;
  color: #edede8;
  @media(max-width: 700px){
    font-size: 1.5vh;
  }
`;

const renderData = data.map(datalink => {
  return(
    <a
      key = {datalink.id}
      href = {datalink.href}
      rel = 'noreferrer'
      target = '_blank'
    >
       {datalink.icon}
    </a>
  )
});


const Footer = () => {

  var target = document.querySelector('footer');
  var scrollToTopBtn = document.querySelector('.showBtn');
  var rootElement = document.documentElement;

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) scrollToTopBtn.classList.add('showBtn')
      else scrollToTopBtn.classList.remove('showBtn')
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
      <FooterContainer id = 'closer'>
        <MiniContainer>
          <Copyright>
              ©{date} Designed by Alex Lee
            </Copyright>
            <FooterLinks>
              {renderData}
            </FooterLinks>
        </MiniContainer>
        <FaChevronCircleUp
          className = 'showBtn'
          style = {{
            color: 'white',
            position: 'static',
            opacity: '0.5',
            height: '2.5vh',
            width: '2.5vh'
          }}
          onClick = {scrollToTop}
        />
      </FooterContainer>
  );
}

export default Footer;