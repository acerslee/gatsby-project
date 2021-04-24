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
    <>
      <Seo title = 'Home'/>
      <Header />
      <Welcome />
      <PersonalSection />
      <hr
        style = {{
          width: '70%'
        }}
      />
      <ProjectsList title = 'featured projects' nodes = {nodes} />
      <Footer />
    </>
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