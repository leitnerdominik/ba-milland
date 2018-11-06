import React from 'react';
import { Link } from 'gatsby';

import classes from './NavigationItem.module.css';

const navigationItem = ({link, children}) => (
  <li style={{margin: '0'}}>
    <Link 
      activeClassName={classes.ActiveLink}
      className={classes.Link}
      to={link}
    >{children}</Link>
  </li>
);

export default navigationItem;