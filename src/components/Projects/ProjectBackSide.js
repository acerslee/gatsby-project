import React from 'react'
import styled from 'styled-components'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt'
import PropTypes from 'prop-types'

const ProjectInfo = styled.article`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(240, 240, 240,0.85);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ProjectDescription = styled.p`
  margin: 1rem;
  font-size: 2rem;
`

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
`

const LinkButton = styled.a`
  display: flex;
  flex-direction:row;
  align-items:center;
  text-decoration: none;
  background-color: rgb(254 68 69);
  transition: background-color 500ms;
  border-radius: 8px;
  padding: 0.4em;
  color: white;
  & :hover{
    background-color: rgb(174 67 67);
    cursor: pointer;
  }
`

const LinkText = styled.span`
  margin-left: 0.3em;
  font-size: 1.3rem;
  @media (max-width: 711px) {
    font-size: 1rem;
  }
`

const ProjectBackSide = ({
  title,
  description,
  githubLink,
  deploymentLink,
}) => {
  return (
    <ProjectInfo>
      <ProjectDescription>
        {description}
      </ProjectDescription>
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
  )
}

ProjectBackSide.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  deploymentLink: PropTypes.string
}


export default ProjectBackSide
