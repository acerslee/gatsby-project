import React, { useEffect, useRef } from 'react';
import data from '../data/socialLinks.js';
import { FaChevronCircleUp } from 'react-icons/fa';
import { document } from 'browser-monads';
import styled from 'styled-components';

const date = new Date().getFullYear();

const FooterContainer = styled.div`
  margin: 0 auto 0 auto;
  background-color: #0d1957;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// const Header = styled.h1`
//   color: #edede8;
//   font-size: 5vh;
//   @media(max-width: 700px){
//     font-size: 2.8vh;
//   }
// `;

const FooterLinks = styled.footer`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  margin: 2rem auto 2rem auto;
`;

const Copyright = styled.h6`
  width: 30%;
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
      <Copyright>
          ©{date} Alex Lee
        </Copyright>
        <FooterLinks>
          {renderData}
        </FooterLinks>
        <FaChevronCircleUp
          className = 'showBtn'
          style = {{color: 'white'}}
          onClick = {scrollToTop}
        />
      </FooterContainer>
  );
}

export default Footer;