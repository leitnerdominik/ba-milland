import React from "react";
import { Link } from "gatsby";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.titleContainer}>
        <h2>{props.title}</h2>
      </div>
      <div className={classes.footer}>
        <a href={props.file} className={classes.Link}>ÖFFNEN</a>
      </div>
    </div>
  );
};

export default Card;
