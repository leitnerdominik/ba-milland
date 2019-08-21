import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";

import HyperLink from "../HyperLink/HyperLink";

import classes from "./ClubPreview.module.css";

const clubPreview = ({ htmlContent, img, title, link }) => (
  <div className={classes.ClubPreviewContainer}>
    <div>
      <Img fluid={img} />
    </div>
    <div className={classes.ClubPreviewText}>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
    <div className={classes.Footer}>
      <HyperLink external link={link}>MEHR ERFAHREN</HyperLink>
    </div>
  </div>
);

clubPreview.propTypes = {
  img: PropTypes.any.isRequired,
  htmlContent: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default clubPreview;
