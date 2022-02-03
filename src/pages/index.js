import * as React from "react";
import { graphql } from 'gatsby';
import { Seo,
         Header,
         Welcome,
         PersonalSection,
         ProjectsList,
         Footer
        } from '../components/index';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  p, h1, h2, li, .socials, .link-button{
    font-family: 'Roboto Condensed';
    font-weight: 400;
  }

  h3 {
    font-family:'Roboto Condensed';
    font-weight: 700;
    color: #595959;
  }

  html{
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  .scroll-lock{
    position: fixed;
  }
`;

export default function IndexPage ({ data }) {
  const {
    allContentfulProject,
    allContentfulPersonal,
    allContentfulWelcomeSection,
  }  = data;

  return (
    <>
      <GlobalStyle />
        <Seo title = 'Home'/>
        <Header />
        <Welcome node={allContentfulWelcomeSection.edges[0]} />
        <PersonalSection node={allContentfulPersonal.edges[0]} />
        <ProjectsList edges = {allContentfulProject.edges} />
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
    allContentfulPersonal {
      edges {
        node {
          about {
            about
          }
        }
      }
    }
    allContentfulWelcomeSection {
      edges {
        node {
          subtext
        }
      }
    }
  }
`
