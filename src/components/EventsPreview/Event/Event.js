import React from 'react';
import { Link } from 'gatsby';

import classes from './Event.module.css';

const event = ({ title, date_from, date_until, time_from, time_until, content, path }) => {
  const renderContent = content ? <p>{content}</p> : null;

  let renderTime = null;
  if(time_from && time_until) {
    renderTime = <p className={classes.TimeContainer}><b>Zeit: </b> {time_from} - {time_until}</p>
  } else if(time_from) {
    renderTime = <p className={classes.TimeContainer}><b>Zeit: </b> {time_from}</p>
  }

  let renderDate = date_from;
  if(date_from && date_until) {
    renderDate = `${date_from} - ${date_until}`;
  }

  return (
    <div className={classes.EventContainer}>
      <Link className={classes.EventLink} to={path}>
        <h3>{title}</h3>
      </Link>
      <h5 className={classes.EventDate}>
        {renderDate}
      </h5>
      <br />
      {renderTime}
      <br />
      {renderContent}
    </div>
  );
};

export default event;
