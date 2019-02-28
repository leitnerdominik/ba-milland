import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

import classes from "./Hero.module.css";
import '../../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';

const hero = ({ scrollToContent }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "bildungsausschuss-logo-big.png" }) {
          childImageSharp {
            fluid(maxHeight: 250, maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <header className={classes.HeroContainer}>
        <section className={classes.ContentContainer}>
          <div className={classes.LogoContainer}>
            <Img fluid={data.file.childImageSharp.fluid} className={classes.Logo} />
            <span>Bildungsausschuss</span>
          </div>
          <div>
            <span>Milland</span>
          </div>
        </section>
      </header>
    )}
  />
);

export default hero;
