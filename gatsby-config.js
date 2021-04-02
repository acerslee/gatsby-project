module.exports = {
  siteMetadata: {
    title: "Alex Lee Personal Portfolio",
    description: "Version 2.5 of my Software Engineering Portfolio",
    author: "Alex Lee",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
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
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data/}`
    //   }
    // },
  ],
};
