import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import mize from '../../../assets/mize.pdf';
import chronik2020 from '../../../assets/Chronik2020.pdf';

import classes from './NavigationItems.module.css';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem path="/">Milland</NavigationItem>
    {/* <NavigationItem path="/veranstaltungen">Veranstaltungen</NavigationItem> */}
    <NavigationItem path="/previewclubs">Vereine</NavigationItem>
    <NavigationItem path="/geschichte">Geschichte</NavigationItem>
    <NavigationItem path="http://www.pfarrei-milland.it/Aktuelles%20PDF/PDFdruck.pdf" extern>Pfarrblatt</NavigationItem>
    <NavigationItem path={mize} extern>MiZe</NavigationItem>
    {/* <NavigationItem path={chronik2020} extern>Chronik</NavigationItem> */}
    <NavigationItem path="/chronik">Chronik</NavigationItem>
  </ul>
);

export default navigationItems;
