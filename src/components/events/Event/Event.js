import React from 'react';
import { Link } from 'gatsby';

import classes from './Event.module.css';

const event = ({ title, date, content, path }) => (
  <div className={classes.EventContainer}>
    <Link className={classes.EventLink} to={path}>
      <h1>{title}</h1>
    </Link>
    <h3 className={classes.EventDate}>{date}</h3>
    <p>{content}</p>
  </div>
);

export default event;