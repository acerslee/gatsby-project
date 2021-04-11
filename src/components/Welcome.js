import React from 'react';
import '../styles/welcome-section.css';

const Welcome = () => (
  <div id= "welcome-section">
    <div className = 'border-box'>
      <p
        style = {{
          letterSpacing: '10px'
        }}
      >
        ALEX
        <br />
        LEE
      </p>
    </div>
    <p
      className = 'welcome-caption'
      style = {{
        letterSpacing: '5px',
      }}
    >SOFTWARE ENGINEER / PHOTOGRAPHER</p>
  </div>
);

export default Welcome;