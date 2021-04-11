import React from 'react';
import Header from '../components/Header.js';
import AllProjects from '../components/AllProjects.js';
import Seo from '../components/SEO.js';

const ProjectsPage = () => (
    <div className = 'projects-page-container'>
       <Seo title = 'Projects' description = 'about projects' />
      <Header />
      <AllProjects />
    </div>
);

export default ProjectsPage;