import React from 'react';
import { data } from '../data/data.js';
import styled from 'styled-components';

const date = new Date().getFullYear();

const FooterContainer = styled.footer`
  background-color: #0d1957;
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  @media(max-width: 1000px){
    padding: 0;
  }
`;

const MiniContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  @media(max-width: 700px){
    flex-direction: column;
    justify-content: flex-end;
  }
`
const FooterLinks = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-evenly;
  @media(max-width: 1200px){
    width: 40%;
  };
  @media(max-width: 700px){
    width: 80%;
    padding-bottom: 1rem;
  };
`;

const Copyright = styled.h3`
  font-size: 1.6vh;
  text-align: left;
  color: #edede8;
  @media(max-width: 700px){
    font-size: 1.5vh;
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