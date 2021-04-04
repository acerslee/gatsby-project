import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "portfolio_bw.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    // console.log('data', data.placeholderImage.childImageSharp.fluid.src)

    const picture = getImage(data.placeholderImage.childImageSharp.fluid.src)

    return (
      <section>
        <GatsbyImage image = {picture} alt = ""/>
      </section>
    )
    // return <h1>Hello world</h1>
}

export default Image;