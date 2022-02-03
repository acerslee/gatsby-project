import React, { useState } from 'react'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ProjectBackSide from './ProjectBackSide'

const ProjectElement = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  max-height: 70vh;
  @media (max-width: 1440px) {
    align-items: center;
    height: auto;
  }
  @media (max-width: 711px) {
    width: 100%;
  }
`;

const ProjectInfo = styled.div`
  width: 100%;
  background: #f0f0f0;
  height: auto;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
      box-shadow: 0 10px 6px -6px #777;
  & > * {
    margin-left: 1rem;
    text-align: left;
  }
  @media (max-width: 711px) {
    width: 95%;
  }
`;

const ProjectHeading = styled.h2`
  text-align: center;
  @media (max-width: 711px) {
    font-size: 1.2em;
  }
`;

const ProjectDescription = styled.p`
  word-spacing: 0.1em;
  height: 12vh;
  @media (max-width: 1024px) {
    height: auto;
  }
  @media (max-width: 711px) {
    font-size: 1.2em;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-evenly;
  margin: 0 0 1em 0;
  @media (max-width: 1440px) {
    align-items:center;
  }
  @media (max-width: 711px) {
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
  @media (max-width: 711px) {
    font-size: 1rem;
  }
`;

const Project = props => {

  const {
          title,
          description,
          githubLink,
          projectImage,
          deploymentLink
        } = props

  const [ isFlipped, setIsFlipped ] = useState(false)

  console.log(isFlipped)

  return(
      <ProjectElement
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <Img
          fluid = {projectImage[0].fluid}
          className = "project-img"
          loading = "lazy"
          alt = {title}
        />
        {isFlipped &&
          <ProjectBackSide
            title={title}
            description={description}
            githubLink={githubLink}
            deploymentLink={deploymentLink}
          />
        }
        <ProjectInfo>
          <ProjectHeading>
            {title}
          </ProjectHeading>
          {/* <ProjectDescription>{description}</ProjectDescription> */}

          {/* <ProjectLinks>
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
          </ProjectLinks> */}
        </ProjectInfo>
    </ProjectElement>
  );
};

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  projectImage: PropTypes.string,
  deploymentLink: PropTypes.string
}

export default Project