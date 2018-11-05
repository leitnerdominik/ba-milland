import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './Toolbar.module.css';

const toolbar = ({siteTitle}) => (
  <header className={classes.Toolbar}>
    <div>
      {siteTitle}
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;