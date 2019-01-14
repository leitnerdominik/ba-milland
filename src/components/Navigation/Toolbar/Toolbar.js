import React from 'react';
import { Link } from 'gatsby';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../DrawerToggle/DrawerToggle';
 
import classes from './Toolbar.module.css';

const toolbar = ({siteTitle, drawerClicked, sideDrawerOpen}) => (
  <div className={classes.NavContainer}>
    <DrawerToggle clicked={drawerClicked} sideDrawerOpen={sideDrawerOpen} />
    <div className={classes.Toolbar}>
      <div className={classes.Logo}>
        <Link to="/">
          <Logo />
        </Link>
        <Link className={classes.Title} to="/">{siteTitle}</Link>
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </div>
  </div>
);

export default toolbar;
