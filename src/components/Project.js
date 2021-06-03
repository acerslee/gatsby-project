import React from 'react';
import { FaGithubSquare, FaExternalLinkSquareAlt } from 'react-icons/fa';
import Img from 'gatsby-image';

const Project = ({ heading, description, tools, link, imageAlt, image, deployment }) => {
  return(
    <div className = "project">
      <Img
        fluid = {image.childImageSharp.fluid}
        className = "project-img"
        loading = "lazy"
        alt = {imageAlt}
      />
      <div className = 'project-info'>
        <h3 className = 'project-heading'>{heading}</h3>
        <p className = 'project-desc'>{description}</p>
          <div className = 'project-stack'>
            {tools.map((tool, index) => (
              <span key = {index}>{tool}</span>
            ))}
          </div>
          <div className=  'project-links'>
            <a
              href = {link}
              target = '_blank'
              rel = 'noreferrer'
            >
              <FaGithubSquare className = 'project-icon'/>
            </a>
            {deployment &&
              <a
                href = {deployment}
                target = '_blank'
                rel = 'noreferrer'
              >
                <FaExternalLinkSquareAlt className = 'project-icon'/>
              </a>
            }
          </div>
      </div>
    </div>

  );
};

export default Project;