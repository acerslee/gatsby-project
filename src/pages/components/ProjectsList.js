import React from 'react';
import Project from './Project.js';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button'
import '../../styles/project-section.css';

const ProjectsList = ({ projects, title, showLink }) => {

  return(
    <section id = 'projects-section'>
      <div className = 'section-center projects-center'>
        <h2
          className = 'project-headline'
          style = {{
            fontSize: '2.5rem',
            color: '#f0f0f0'
          }}
        >
          Featured Projects
        </h2>
        {projects.map(project => (
          <Project
            key = {project.id}
            {...project}
          />
        ))}
      </div>

      <Link to = '/projects'>
        <Button
          variant = 'contained'
          color = 'primary'
          className = 'project-list-button'
          style = {{
            marginLeft: '45%'
          }}
        >
          More projects here
        </Button>
      </Link>
    </section>
  );
}

export default ProjectsList;