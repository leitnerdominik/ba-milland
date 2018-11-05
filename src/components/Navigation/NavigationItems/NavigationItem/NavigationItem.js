import React from 'react';
import { Link } from 'gatsby';

import classes from './NavigationItem.module.css';

const navigationItem = ({link, children}) => (
  <li className={classes.NavigationItem}>
    <Link to={link}>{children}</Link>
  </li>
);

export default navigationItem;