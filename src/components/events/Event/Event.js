import React from 'react';
import { Link } from 'gatsby';

import classes from './Event.module.css';

const event = ({ title, date, content, path }) => (
  <div className={classes.EventContainer}>
    <Link className={classes.EventLink} to={path}>
      <h3>{title}</h3>
    </Link>
    <h5 className={classes.EventDate}>{date}</h5>
    <p>{content}</p>
  </div>
);

export default event;