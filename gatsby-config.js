module.exports = {
  siteMetadata: {
    title: "Alex Lee Personal Portfolio",
    description: "Version 3 of my Software Engineering Portfolio",
    author: "Alex Lee",
    siteUrl: "https://alexanderhjlee.com"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "712",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        contentTypes: [`projects`],
      },
    },
  ],
};
