import React from 'react';
import { Link } from 'gatsby';

import classes from './NavigationItem.module.css';

const navigationItem = ({ path, children, extern }) => {
  const link = extern ? (
    <a 
      className={classes.Link}
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      >{children}</a>
  ) : (
    <Link
      activeClassName={classes.ActiveLink}
      className={classes.Link}
      to={path}
    >
      {children}
    </Link>
  );
  return (
    <li style={{ margin: '0' }}>
      {link}
    </li>
  );
};

export default navigationItem;
