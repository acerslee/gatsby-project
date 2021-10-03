import * as React from "react";
import loadable from '@loadable/component';
import { graphql } from 'gatsby';
import Seo from '../components/SEO.js';
import Header from '../components/Header.js';
import Welcome from '../components/Welcome.js';
import { createGlobalStyle } from 'styled-components';

const PersonalSection = loadable(() => import('../components/Personal.js'))
const ProjectsList = loadable(() => import('../components/ProjectsList.js'))
const Footer = loadable(() => import('../components/Footer.js'))

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  p, h1, h2, li, .socials, .link-button{
    font-family: 'Lato', sans-serif;
  }

  h3 {
    font-family:'Courier New', Courier, monospace;
    color: #595959;
  }

  html{
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
  }

  .scroll-lock{
    position: fixed;
  }

  header, section, footer {
    scroll-snap-align: start;
  }

  .gatsby-container {
    scroll-snap-type: y proximity;
    overflow-y: scroll;
    height: 100vh;
  }
`;

export default function IndexPage ({ data }) {
  const {allContentfulProject:{edges}} = data;

  return (
    <div className = "gatsby-container">
      <GlobalStyle />
        <Seo title = 'Home'/>
        <Header />
        <Welcome />
        <PersonalSection />
        <hr style = {{ width: '70%' }}/>
        <ProjectsList edges = {edges} />
        <Footer />
    </div>
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