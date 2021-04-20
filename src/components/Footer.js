import React from 'react';
import data from '../data/socialLinks.js'
import { makeStyles } from '@material-ui/core/styles';

const date = new Date().getFullYear();

const useStyles = makeStyles({
  footerContainer: {
    paddingTop: '2rem',
    margin: '0 auto 0 auto',
    textAlign: 'center'
  },
  header: {
    fontSize: '5vh',
    '@media(max-width: 700px)' : {
      fontSize: '2.8vh'
    }
  },
  links: {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-around',
    margin: '2rem auto 2rem auto'
  },
  copyright: {
    fontSize: '1.6vh',
    textAlign: 'center',
    color: 'black',
    '@media(max-width: 700px)' : {
      fontSize: '1.5vh'
    }
  },
  returnLink: {
    fontSize: '1.3vh',
    textAlign: 'center',
    color: 'black',
    textDecoration: 'none !important',
    '@media(max-width: 700px)' : {
      fontSize: '1.5vh'
    }
  }
});

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
  const classes = useStyles();

  return(
    <div id = 'closer' className = {classes.footerContainer}>
      <h1 className = {classes.header}>
        Check out my socials below!
      </h1>
      <div className = {classes.links}>
        {renderData}
      </div>
      <h6 className= {classes.copyright}>
        ©{date} Designed and Built by Alex Lee
      </h6>
      <a className = {classes.returnLink} href = '#navbar'>
        Back to top
      </a>
    </div>
  );
}

export default Footer;