import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import languageList from '../data/codingList.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  personalContainer: {
    height: '100%',
    width: '80%',
    paddingTop: '2rem',
    margin: '0 auto 10vh auto',
  },
  biography: {
    display: 'flex',
    flexDirection: 'row',
    '@media(max-width: 1400px)' : {
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  about: {
    width: '50%',
    marginLeft: '1vw',
    marginTop: '5vh',
    fontSize: '1.7rem',
    '@media(max-width: 1400px)' : {
      textAlign: 'center',
      width: '82%',
      margin: '0 auto 0 auto'
    }
  },
  portrait: {
    height: '30vw',
    width: '30vw',
    margin: 'auto',
    borderRadius: '50%',
    '@media(max-width: 700px)' : {
      height: '50vw',
      width: '50vw',
    }
  },
  languageList: {
    '@media(max-width: 1400px)' : {
      paddingLeft: 0,
      listStyle: 'none'
    },
    '@media(max-width: 700px)' : {
      fontSize: '5vw'
    }
  },
  headerCaption: {
    '@media(max-width: 700px)' : {
      fontSize: '5.5vw'
    }
  },
  paragraph: {
    '@media(max-width: 700px)' : {
      fontSize: '5vw'
    }
  }
});

const list = languageList.map(language => {
  return(
    <li key = {language.id}>
      {language.text}
    </li>
  )
});

const PersonalSection = () => {

  const classes = useStyles();

  return(
    <div id = "personal-section" className = {classes.personalContainer}>
      <div className = {classes.biography}>
        <StaticImage
          src = '../data/images/portfolio_bw.png'
          alt = 'self portrait'
          className = {classes.portrait}
          loading = 'eager'
        />
        <div className = {classes.about}>
          <p className = {classes.paragraph}>I'm a Software Engineer based out of NYC with a passion for photography and coffee. Check out more of my contents below!</p>
          <h2 className = {classes.headerCaption}>Experienced, or learning the following:</h2>
          <ul className = {classes.languageList}>
            {list}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalSection;