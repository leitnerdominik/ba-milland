import React from 'react';

import classes from './AboutUs.module.css';

const aboutUs = ({children}) => {
  return (
    <div className={classes.Container}>
      {children}
    </div>
  );
};

export default aboutUs;
