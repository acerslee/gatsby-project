import React from 'react';
import Project from './Project.js';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectHeadline = styled.h1`
  font-size: 2.5rem;
  color: #595959;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 1.2em;
  }
`;

const ProjectsCenter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 700px) {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ProjectsList = ({ edges }) => {

  return(
    <section
      id = 'projects'
      aria-label = 'list of my showcase projects'
    >
      <ProjectHeadline>
          Featured Projects
      </ProjectHeadline>
      <ProjectsCenter>
        {edges.map(project => {
          const { node } = project
          return(
            <Project
              key = {node.title}
              {...node}
            />
          )
          })}
      </ProjectsCenter>
    </section>
  );
}

ProjectsList.propTypes = {
  edges: PropTypes.array
}

export default ProjectsList;