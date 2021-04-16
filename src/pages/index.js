import * as React from "react";
import { graphql } from 'gatsby';
import Header from '../components/Header.js';
import Welcome from '../components/Welcome.js';
import PersonalSection from '../components/Personal.js';
import ProjectsList from '../components/ProjectsList';
import Footer from '../components/Footer.js';
import Seo from '../components/SEO.js';

export default function IndexPage ({ data }) {
  const {allProjectsDataJson:{nodes}} = data;

  return (
    <div id = 'app-list'>
      <Seo title = 'Home'/>
      <Header />
      <Welcome />
      <PersonalSection />
      <ProjectsList title = 'featured projects' nodes = {nodes} />
      <Footer />
    </div>
  )
}


export const query = graphql`
  {
    allProjectsDataJson {
      nodes {
        description
        heading
        id
        link
        deployment
        tools {
          id
          tool
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