import React from 'react';
import data from '../data/socialLinks.js';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const date = new Date().getFullYear();

const FooterContainer = styled.div`
  padding-top: 2rem;
  margin: 0 auto 0 auto;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 5vh;
  @media(max-width: 700px){
    font-size: 2.8vh;
  }
`;

const FooterLinks = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin: 2rem auto 2rem auto;
`;

const Copyright = styled.h6`
  font-size: 1.6vh;
  text-align: center;
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
    <FooterContainer id = 'closer'>
      <Header>
        Check out my socials below!
      </Header>
      <FooterLinks>
        {renderData}
      </FooterLinks>
      <Copyright>
        ©{date} Designed and Built by Alex Lee
      </Copyright>
      <ReturnLink href = '#navbar'>
        Back to top
      </ReturnLink>
    </FooterContainer>
  );
}

export default Footer;