module.exports = {
  flags:{
    DEV_SSR: true
  },
  siteMetadata: {
    title: "Alex Lee Personal Portfolio",
    description: "I'm a Software Engineer based out of NYC with a passion in photography and coffee. Check out more of my contents below!",
    author: "Alex Lee",
    siteUrl: "https://alexanderhjlee.com"
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
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
};