import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './Toolbar.module.css';

const toolbar = ({siteTitle}) => (
  <div className={classes.NavContainer}>
    <div className={classes.Toolbar}>
      <span>
        {siteTitle}
      </span>
      {/* <nav className={classes.Navigation}> */}
        <NavigationItems />
      {/* </nav> */}
    </div>
  </div>
);

export default toolbar;