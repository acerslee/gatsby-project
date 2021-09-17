import React from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt'
import Img from 'gatsby-image';

const Project = ({ title, description, githubLink, projectImage, deploymentLink }) => {
  return(
    <div className = "project">
      <Img
        fluid = {projectImage[0].fluid}
        className = "project-img"
        loading = "lazy"
        alt = {title}
      />
      <div className = 'project-info'>
        <h2 className = 'project-heading'>{title}</h2>
        <p className = 'project-desc'>{description}</p>
        <div className=  'project-links'>
          <a
            href = {githubLink}
            target = '_blank'
            rel = 'noreferrer'
            aria-label = 'Github'
            className = "link-button"
          >
            <FaGithub className = 'project-icon'/>
            <span className = 'link-text'>Github</span>
          </a>
          {deploymentLink &&
            <a
              href = {deploymentLink}
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
