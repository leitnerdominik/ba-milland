import React from 'react';
import { Link } from 'gatsby';

import classes from './Event.module.css';

const event = props => {
  const {
    title,
    date_from,
    date_until,
    time_from,
    time_until,
    club,
    badgetColor,
    content,
    path,
  } = props;
  const renderContent = content ? <p>{content}</p> : null;

  let renderTime = null;
  if (time_from && time_until) {
    renderTime = (
      <p className={classes.TimeContainer}>
        <b>Zeit: </b> {time_from} - {time_until}
      </p>
    );
  } else if (time_from) {
    renderTime = (
      <p className={classes.TimeContainer}>
        <b>Zeit: </b> {time_from}
      </p>
    );
  }

  let renderDate = date_from;
  if (date_from && date_until.trim().length > 0) {
    renderDate = `${date_from} - ${date_until}`;
  }

  return (
    <div className={classes.EventContainer}>
      <h5 className={classes.EventDate}>{renderDate}</h5>
      <Link className={classes.EventLink} to={path}>
        <h3>{title}</h3>
      </Link>
      <span style={{
        background: `${badgetColor}`
      }} className={classes.Club}>{club}</span>
      {renderTime}
      {renderContent}
    </div>
  );
};

export default event;
