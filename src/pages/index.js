import * as React from "react";
import { graphql } from 'gatsby';
import Header from '../components/Header.js';
import Welcome from '../components/Welcome.js';
import PersonalSection from '../components/Personal.js';
import ProjectsList from '../components/ProjectsList';
import Footer from '../components/Footer.js';
import Seo from '../components/SEO.js';

export default function IndexPage ({ data }) {
  const {allStrapiProjects:{nodes:projects}} = data;

  return (
    <div id = 'app-list'>
      <Seo title = 'Home'/>
      <Header />
        <Welcome />
        <PersonalSection />
        <ProjectsList projects = {projects} title = 'featured projects' showLink/>
        <Footer />
    </div>
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