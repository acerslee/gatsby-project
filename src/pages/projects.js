import React from 'react';
import Header from '../components/Header.js';
import AllProjects from '../components/AllProjects.js';
import Seo from '../components/SEO.js';
import { makeStyles } from '@material-ui/core/styles'

const ProjectsPage = () => {
  const useStyles = makeStyles({
    container: {
      // maxWidth: '0%'
    }
  })

  const classes = useStyles();

  return(
    <div className = {classes.container}>
        <Seo title = 'Projects' description = 'about projects' />
      <Header />
      <AllProjects />
    </div>
  )
};

export default ProjectsPage;