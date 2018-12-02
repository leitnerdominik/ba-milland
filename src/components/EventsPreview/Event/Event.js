import React from 'react';
import { Link } from 'gatsby';

import classes from './Event.module.css';

const event = ({ title, date, content, path, time }) => {
  const renderContent = content ? <p>{content}</p> : null;
  const renderTime = time ? `${time},` : null;
  return (
    <div className={classes.EventContainer}>
      <Link className={classes.EventLink} to={path}>
        <h3>{title}</h3>
      </Link>
      <h5 className={classes.EventDate}>
        {renderTime} {date}
      </h5>
      {renderContent}
    </div>
  );
};

export default event;
