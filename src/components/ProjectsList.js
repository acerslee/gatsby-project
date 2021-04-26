import React from 'react';
import Project from './Project.js';
import '../styles/project-section.scss';

const ProjectsList = ({ title, nodes }) => {

  return(
    <section id = 'projects'>
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
        {nodes.map(project => (
          <Project
            key = {project.id}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsList;