import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "vereine_header_image_2.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
      </>
    )}
  />
);
