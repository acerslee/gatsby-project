import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const siteQuery = graphql`
  {
    site {
      siteMetadata {
        twitterUsername
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
      <meta name = 'viewpoint' content = 'width=device-width-scale=1,maximum-scale=1, user-scalable=no' />
      <meta name = 'description' content = {description || siteDesc} />
      <meta name="HandheldFriendly" content="true"></meta>
      <meta property = 'og:url' content = {siteUrl} />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato&display=swap" />
      <link rel="apple-touch-icon" href="../data/images/favicon/apple-touch-icon.png" />


      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:creator" content={twitterUsername} /> */}
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
    </Helmet>
  )
};

export default Seo;