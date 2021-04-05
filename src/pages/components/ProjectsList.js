import React from 'react';
import Project from './Project.js';
import { Link } from 'react-router-dom';
import '../styles/project-section.css';

const ProjectsList = ({ projects, title, showLink }) => {

  return(
    <section className = 'section projects'>
      <div className = 'section-center projects-center'>
        <h2 className = 'project-headline'>Featured Projects</h2>
        {projects.map(project => (
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