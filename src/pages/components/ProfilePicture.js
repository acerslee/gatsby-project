import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const Image = () => {
  const data = useStaticQuery(graphql`
      {
        file(relativePath: {eq: "portfolio_bw.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    console.log('data', data.file.childImageSharp.fluid.src)

    const picture = getImage(data.file.childImageSharp.fluid.src)

    return <GatsbyImage image = {picture} />
}

export default Image;