import React from 'react';
import PropTypes from 'prop-types';

import classes from './AboutUs.module.css';

const aboutUs = ({children}) => {
  return (
    <div className={classes.Container}>
      {children}
    </div>
  );
};

aboutUs.prototypes = {
  children: PropTypes.string.isRequired,
}

export default aboutUs;
