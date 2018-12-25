import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Hero.module.css";

const hero = ({ scrollToContent }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "education.jpg" }) {
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
          <button className={classes.ButtonDown} onClick={scrollToContent}>
            <FontAwesomeIcon icon="angle-down" />
          </button>
        </section>
      </header>
    )}
  />
);

export default hero;