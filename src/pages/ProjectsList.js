import React from 'react';
import Project from './Project.js';
// import { projects } from './data/portfolioData.js';
import { Link } from 'react-router-dom';
import '../styles/project-section.css';


const ProjectsList = ({ projects, title, showLink }) => {

  return(
  <section className = 'section projects'>
    <div className = 'section-center projects-center'>
      <h2 className = 'project-headline'>Some projects I've worked on</h2>
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