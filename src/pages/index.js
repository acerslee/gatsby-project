import * as React from "react";
import { graphql } from 'gatsby';
import Header from './Header.js';
import Welcome from './Welcome.js';
import PersonalSection from './Personal.js';
import ProjectsList from './ProjectsList';
import AllProjects from './AllProjects.js';
import Footer from './Footer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default ({ data }) => {
  const {allStrapiProjects:{nodes:projects}} = data;

  return (
    <BrowserRouter>
      <div id = 'app-list'>
        <Helmet title = 'Alex Lee Portfolio' />
        <Header />
          <Switch>
            <Route path = '/' exact render = {() =>
              <div>
                <Welcome />
                <PersonalSection />
                <ProjectsList projects = {projects} title = 'featured projects' showLink/>
                <Footer />
              </div>
            }
            />
            <Route path = '/projects' exact component = {AllProjects} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {feature: {eq: true}}) {
      nodes {
        github
        name
        description
        id
        stack {
          id
          stack
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`