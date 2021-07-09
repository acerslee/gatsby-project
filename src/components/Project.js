import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Img from 'gatsby-image';

const Project = ({ heading, description, link, imageAlt, image, deployment }) => {

  return(
    <div className = "project">
      <Img
        fluid = {image.childImageSharp.fluid}
        className = "project-img"
        loading = "lazy"
        alt = {imageAlt}
      />
      <div className = 'project-info'>
        <h2 className = 'project-heading'>{heading}</h2>
        <p className = 'project-desc'>{description}</p>
        <div className=  'project-links'>
          <a
            href = {link}
            target = '_blank'
            rel = 'noreferrer'
            aria-label = 'Github'
            className = "link-button"
          >
            <FaGithub className = 'project-icon'/>
            <span className = 'link-text'>Github</span>
          </a>
          {deployment &&
            <a
              href = {deployment}
              target = '_blank'
              rel = 'noreferrer'
              aria-label = 'External Link'
              className = "link-button"
            >
              <FaExternalLinkAlt className = 'project-icon'/>
              <span className = 'link-text'>Deployment</span>
            </a>
          }
        </div>
      </div>
    </div>

  );
};

export default Project;