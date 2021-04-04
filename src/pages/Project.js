import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
// import {StaticImage, getImage } from 'gatsby-plugin-image'
import Img from 'gatsby-image'
// import '../styles/project-section.css';

const Project = ({github, name, description, stack, image}) => {

  // let toolsArray;
  // toolsArray = tools.map(tool => (
  //     <li className = 'languages'>{tool}</li>
  // ))

  return(
    <article className = "project">
      <Img
        fluid = {image.childImageSharp.fluid}
        className = "project-img"
      />
      <div className = 'project-info'>
        <h3>{name}</h3>
        <p className = 'project-desc'>{description}</p>
          <div className = 'project-stack'>
            {stack.map(item => {
              return <span key = {item.id}>{item.stack}</span>
            })}
          </div>
          <div className=  'project-links'>
            <a href = {github}>
              <FaGithubSquare className = 'project-icon' />
            </a>
          </div>
      </div>
    </article>

  );
};

export default Project;