import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem path="/">Home</NavigationItem>
    <NavigationItem path="/veranstaltungen">Veranstaltungen</NavigationItem>
    <NavigationItem path="/previewclubs">Vereine</NavigationItem>
    <NavigationItem path="/geschichte">Geschichte</NavigationItem>
    <NavigationItem path="http://www.pfarrei-milland.it/Aktuelles%20PDF/PDFdruck.pdf" extern>Pfarrblatt</NavigationItem>
    <NavigationItem path="/page-2">MiZe</NavigationItem>
  </ul>
);

export default navigationItems;
