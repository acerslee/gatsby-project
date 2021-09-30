import React from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt'
import Img from 'gatsby-image';
import styled from 'styled-components';

const ProjectElement = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 1rem;
  z-index: 0;
  max-width: 85%;
  max-height: 70vh;
  @media (max-width: 1400px) {
    align-items: center;
    height: auto;
  }
`;

const ProjectInfo = styled.div`
  background: #f0f0f0;
  height: auto;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
      box-shadow: 0 10px 6px -6px #777;
  & > * {
    margin-left: 1rem;
    text-align: left;
  }
  @media (max-width: 700px) {
    width: 95%;
  }
`;

const ProjectHeading = styled.h2`
  @media (max-width: 700px) {
    font-size: 1.2em;
  }
`;

const ProjectDescription = styled.p`
  word-spacing: 0.1em;
  height: 12vh;
  @media (max-width: 1000px) {
    height: auto;
  }
  @media (max-width: 700px) {
    font-size: 1.2em;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-evenly;
  margin: 0 0 1em 0;
  @media (max-width: 1400px) {
    align-items:center;
  }
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

const LinkButton = styled.a`
  display: flex;
  flex-direction:row;
  align-items:center;
  text-decoration: none;
  background-color:#0d1957;
  border-radius: 8px;
  padding: 0.4em;
  color: white;
  & :hover{
    background-color: rgb(250, 193, 87);
    color: #000000;
    cursor: pointer;
  }
`;

const LinkText = styled.span`
  margin-left: 0.3em;
  font-size: 1.3rem;
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

const Project = ({ title, description, githubLink, projectImage, stack, deploymentLink }) => {

  return(
      <ProjectElement>
        <Img
          fluid = {projectImage[0].fluid}
          className = "project-img"
          loading = "lazy"
          alt = {title}
        />
        <ProjectInfo>
          <ProjectHeading>{title}</ProjectHeading>
          <ProjectDescription>{description}</ProjectDescription>

          <ProjectLinks>
            <LinkButton
              href = {githubLink}
              target = '_blank'
              rel = 'noreferrer'
              aria-label = 'Github'
              className = "link-button"
            >
              <FaGithub className = 'project-icon'/>
              <LinkText>Github</LinkText>
            </LinkButton>
            {deploymentLink &&
              <LinkButton
                href = {deploymentLink}
                target = '_blank'
                rel = 'noreferrer'
                aria-label = 'External Link'
                className = "link-button"
              >
                <FaExternalLinkAlt className = 'project-icon'/>
                <LinkText>Deployment</LinkText>
              </LinkButton>
            }
          </ProjectLinks>
        </ProjectInfo>
    </ProjectElement>
  );
};

export default Project;