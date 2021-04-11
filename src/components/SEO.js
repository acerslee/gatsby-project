import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const siteQuery = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        siteUrl
        siteTitle: title
      }
    }
  }
`

const Seo = ({ title, description }) => {

  const {site} = useStaticQuery(siteQuery)
  const {siteDesc, siteTitle, siteUrl} = site.siteMetadata;

  return (
    <Helmet htmlAttributes = {{lang: 'en'}} title = {`${title} | ${siteTitle}`}>
      <meta name = 'description' content = {description || siteDesc} />
      <meta property = 'og:url' content = {siteUrl} />
    </Helmet>
  )
};

export default Seo;