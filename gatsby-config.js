const dotenv = require('dotenv');
if (process.env.NODE_ENV !== 'production') dotenv.config()

module.exports = {
  flags:{
    DEV_SSR: true,
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
    PRESERVE_WEBPACK_CACHE: true
  },
  siteMetadata: {
    title: "Alex Lee Portfolio",
    description: "I'm a Software Engineer based out of NYC with a passion in photography and coffee. Check out more of my contents in here.",
    author: "Alex Lee",
    siteUrl: "https://alexanderhjlee.com",
    twitterUsername: "@acerslee"
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "712",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_API,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/data/images/favicon/favicon-16x16.png`, // This path is relative to the root of the site.
      },
    },
  ],
};