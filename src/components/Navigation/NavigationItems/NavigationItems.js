import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Home</NavigationItem>
    <NavigationItem link="/veranstaltungen">Veranstaltungen</NavigationItem>
    <NavigationItem link="/previewclubs">Vereine</NavigationItem>
    <NavigationItem link="/geschichte">Geschichte</NavigationItem>
    <NavigationItem link="/page-2">Pfarrblatt</NavigationItem>
    <NavigationItem link="/page-2">MiZe</NavigationItem>
  </ul>
);

export default navigationItems;
