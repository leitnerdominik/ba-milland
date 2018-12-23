import React from 'react';

import Logo from '../../images/bildungsausschuss-logo.png';

import classes from './Hero.module.css';

const hero = ({scrollToContent}) => (
  <header className={classes.HeroContainer}>
    <section className={classes.ContentContainer}>
      <div className={classes.LogoContainer}>
        <img src={Logo} className={classes.Logo}/><span>Bildungsausschuss</span>
      </div>
      <div>
        <span>Milland</span>
      </div>
      <button onClick={scrollToContent}>DOWN</button>
    </section>
  </header>
);

export default hero;