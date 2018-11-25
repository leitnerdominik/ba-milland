import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import classes from './Logo.module.css';

const logo = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(
          relativePath: { eq: "bildungsausschuss-logo.png" }
        ) {
          childImageSharp {
            fixed(height: 40) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div className={classes.LogoContainer}>
          <Img className={classes.LogoImg} fixed={data.logo.childImageSharp.fixed} />
        </div>
      </>
    )}
  />
);

export default logo;
