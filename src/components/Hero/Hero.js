import React from 'react';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import Logo from '../../images/bildungsausschuss-logo-big.png';

import classes from './Hero.module.css';

const hero = ({scrollToContent, logo}) => (
  <header className={classes.HeroContainer}>
    <section className={classes.ContentContainer}>
      <div className={classes.LogoContainer}>
        <Img fluid={logo} className={classes.Logo}/><span>Bildungsausschuss</span>
      </div>
      <div>
        <span>Milland</span>
      </div>
      <button className={classes.ButtonDown} onClick={scrollToContent}><FontAwesomeIcon icon="angle-down"/></button>
    </section>
  </header>
);

export default hero;