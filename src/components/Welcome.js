import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  welcomeContainer: {
    color: '#FBEEC1',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    margin: '10vh 0 10vh 0',
    '@media(max-width: 1000px)' : {
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  box: {
    borderStyle: 'solid',
    borderWidth: '10px',
    fontSize: '8vw',
    textAlign:'center',
    marginBottom: '1.5vh'
  },
  boxText: {
    letterSpacing: '10px',
    padding: '0 3.5vw 0 3.5vw',
    '@media(max-width: 1000px)' : {
      fontSize: '10vw'
    }
  },
  welcomeCaption: {
    letterSpacing: '5px',
    fontSize: '3vw',
    '@media(max-width: 1000px)' : {
      fontSize: '2.2vw'
    }
  }
});

const Welcome = () => {

  const classes = useStyles();

  return(
    <div id= "welcome-section" className = {classes.welcomeContainer}>
      <div className = {classes.box}>
        <p className = {classes.boxText}>
          ALEX
          <br />
          LEE
        </p>
      </div>
      <p className = {classes.welcomeCaption}>
        SOFTWARE ENGINEER / PHOTOGRAPHER
      </p>
    </div>
  )
};

export default Welcome;