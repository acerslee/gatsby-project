import React from 'react';
import Project from './Project.js';

const ProjectsList = ({ edges }) => {

  return(
    <section
      id = 'projects'
      aria-label = 'list of my showcase projects'
    >
      <h1 className = 'project-headline'>
          Featured Projects
      </h1>
      <div className = 'projects-center'>
        {edges.map(project => {
          const { node } = project
          return(
            <Project
              key = {node.title}
              {...node}
            />
          )
          })}
      </div>
    </section>
  );
}

export default ProjectsList;