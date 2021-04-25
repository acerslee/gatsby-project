import React from 'react';
import Project from './Project.js';
// import { Link } from 'gatsby';
// import Button from '@material-ui/core/Button'
import '../styles/project-section.css';

const ProjectsList = ({ title, nodes }) => {

  return(
    <section id = 'projects-section'>
      <div className = 'section-center projects-center'>
        <h2
          className = 'project-headline'
          style = {{
            fontSize: '2.5rem',
            color: '#595959'
          }}
        >
          Featured Projects
        </h2>
        {nodes.map(project => (
          <Project
            key = {project.id}
            {...project}
          />
        ))}
      </div>

      <div
        className = 'project-button'
        style = {{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {/* <Link to = '/projects'>
          <Button
            variant = 'contained'
            color = 'primary'
            className = 'project-list-button'
            style = {{
              padding: '5px'
            }}
          >
            <p
              className = 'project-list-button-text'
              style ={{
                textAlign: 'center'
              }}
            >
              More projects here
            </p>
          </Button>
         </Link> */}
      </div>
    </section>
  );
}

export default ProjectsList;