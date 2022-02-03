import React from 'react';
import { data } from '../data/data.js';
import styled from 'styled-components';

const date = new Date().getFullYear();

const FooterContainer = styled.footer`
  background-color: #000000;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  @media(max-width: 711px){
    padding: 0
  }
`;

const MiniContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  @media(max-width: 711px){
    flex-direction: column-reverse;
  }
`
const FooterLinks = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-evenly;
  @media(max-width: 1024px){
    width: 40%;
  };
  @media(max-width: 711px){
    width: 80%;
    padding-top: 1em;
  };
`;

const Copyright = styled.h3`
  font-size: 1rem;
  text-align: left;
  color: #edede8;
  @media(max-width: 711px){
    font-size: 0.7rem;
  }
`;

const renderData = data.map((datalink, index) => {
  return(
    <a
      key = {index}
      href = {datalink.href}
      rel = 'noreferrer'
      target = '_blank'
    >
       {datalink.icon}
    </a>
  )
});

const Footer = () => (
  <FooterContainer id = 'contact'>
    <MiniContainer>
      <Copyright>
        ©{date} Designed by Alex Lee
      </Copyright>
      <FooterLinks>
        {renderData}
      </FooterLinks>
    </MiniContainer>
  </FooterContainer>
);

export default Footer;