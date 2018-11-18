import React from 'react';
import { Link } from 'gatsby';

import classes from './HyperLink.module.css';

const hyperlink = ({children, link}) => (
  <div className={classes.LinkContainer}>
    <Link to={link} className={classes.Link}>{children}</Link>
  </div>
);

export default hyperlink;
