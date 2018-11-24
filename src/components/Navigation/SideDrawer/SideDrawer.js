import React, { Fragment } from 'react';

import Logo from '../../Logo/Logo';
import Backdrop from '../../Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './SideDrawer.module.css';

const sideDrawer = ({open, closed}) => {

  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Fragment>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(' ')} onClick={closed}>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );

};

export default sideDrawer;
