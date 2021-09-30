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
  const {allContentfulProject:{edges}} = data;

  return (
    <>
      {/* <Seo title = 'Home'/>
      <Header />
      <Welcome />
      <PersonalSection />
      <hr
        style = {{
          width: '70%'
        }}
      /> */}
      <ProjectsList edges = {edges} />
      <Footer />
    </>
  )
}

export const query = graphql`
  {
    allContentfulProject {
      edges {
        node {
          title
          description
          projectImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          stack
          githubLink
          deploymentLink
        }
      }
    }
  }
`