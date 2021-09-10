import * as React from "react";
import loadable from '@loadable/component';
import { graphql } from 'gatsby';
import Seo from '../components/SEO.js';
import Header from '../components/Header.js';
import Welcome from '../components/Welcome.js';
const PersonalSection = loadable(() => import('../components/Personal.js'))
const ProjectsList = loadable(() => import('../components/ProjectsList.js'))
const Footer = loadable(() => import('../components/Footer.js'))


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
        link
        deployment
        imageAlt
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