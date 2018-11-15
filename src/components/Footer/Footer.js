import React from 'react';
import { Link } from 'gatsby';

import classes from './Footer.module.css';

const footer = () => (
  <footer className={classes.FooterContainer}>
    <Link to="/impressum">Impressum</Link>
    <Link to="/kontakt">Kontakt</Link>
  </footer>
);

export default footer;