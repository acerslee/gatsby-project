module.exports = {
  siteMetadata: {
    title: "Alex Lee Personal Portfolio",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "712",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
