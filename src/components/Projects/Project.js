import React, { useState } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"

import ProjectBackSide from "./ProjectBackSide"

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
`

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
`

const ProjectHeading = styled.h2`
  text-align: center;
  @media (max-width: 711px) {
    font-size: 1.2em;
  }
`

const Project = (props) => {
  const { title, description, githubLink, projectImage, deploymentLink } = props

  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <ProjectElement onClick={() => setIsFlipped(!isFlipped)}>
      <Img
        fluid={projectImage[0].fluid}
        className="project-img"
        loading="lazy"
        alt={title}
      />
      {isFlipped && (
        <ProjectBackSide
          title={title}
          description={description}
          githubLink={githubLink}
          deploymentLink={deploymentLink}
        />
      )}
      <ProjectInfo>
        <ProjectHeading>{title}</ProjectHeading>
      </ProjectInfo>
    </ProjectElement>
  )
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  projectImage: PropTypes.array,
  deploymentLink: PropTypes.string,
}

export default Project
