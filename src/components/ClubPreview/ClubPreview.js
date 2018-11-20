import React from 'react';
import Img from 'gatsby-image';

import HyperLink from '../HyperLink/HyperLink';

import classes from './ClubPreview.module.css';

const clubPreview = ({htmlContent, img, title, link}) => (
  <div className={classes.ClubPreviewContainer}>
    <div>
      <Img fluid={img} />
    </div>
    <div className={classes.ClubPreviewText}>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{__html: htmlContent}}></div>
    </div>
    <div className={classes.Footer}>
      <HyperLink link={link}>MEHR ERFHAREN</HyperLink>
    </div>
  </div>
);

export default clubPreview;
