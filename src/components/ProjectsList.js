import React from 'react';
import Project from './Project.js';

const ProjectsList = ({ title, nodes }) => {

  return(
    <section
      id = 'projects'
      aria-label = 'list of my showcase projects'
    >
      <h2
        className = 'project-headline'
        style = {{
          fontSize: '2.5rem',
          color: '#595959',
          textAlign: 'center'
        }}
        >
          Featured Projects
      </h2>
      <div className = 'projects-center'>
        {nodes.map((project, index) => (
          <Project
            key = {index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsList;