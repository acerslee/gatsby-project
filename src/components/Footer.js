import React from 'react';
import data from '../data/socialLinks.js';
import { FaChevronCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

const date = new Date().getFullYear();

const FooterContainer = styled.div`
  margin: 0 auto 0 auto;
  background-color: #0d1957;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// const Header = styled.h1`
//   color: #edede8;
//   font-size: 5vh;
//   @media(max-width: 700px){
//     font-size: 2.8vh;
//   }
// `;

const FooterLinks = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  margin: 2rem auto 2rem auto;
`;

const Copyright = styled.h6`
  font-size: 1.6vh;
  text-align: left;
  color: #edede8;
  @media(max-width: 700px){
    font-size: 1.5vh;
  }
`;

const ReturnLink = styled.a`
  font-size: 1.3vh;
  text-align: center;
  color: black;
  text-decoration: none !important;
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
  return(
    <>
      <ReturnLink href = '#navbar'>
        Back to top
      </ReturnLink>
      <FooterContainer id = 'closer'>
      <Copyright>
          ©{date} Alex Lee
        </Copyright>
        <FooterLinks>
          {renderData}
        </FooterLinks>
      </FooterContainer>
    </>
  );
}

export default Footer;