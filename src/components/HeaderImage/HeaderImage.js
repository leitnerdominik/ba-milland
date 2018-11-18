import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import classes from './HeaderImage.module.css';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "education-min.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000,  maxHeight: 400) {
              ...GatsbyImageSharpFluid_noBase64 
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div className={classes.ImageContainer}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
      </>
    )}
  />
);
