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
`;

export default function IndexPage ({ data }) {
  const {allContentfulProject:{edges}} = data;

  return (
    <>
      <GlobalStyle />
        <Seo title = 'Home'/>
        <Header />
        <Welcome />
        <PersonalSection />
        <hr style = {{ width: '70%' }}/>
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