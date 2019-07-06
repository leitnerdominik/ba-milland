import React from "react";
import { Link } from "gatsby";

import classes from "./HyperLink.module.css";

const hyperlink = ({ children, link, external }) => (
  <div className={classes.LinkContainer}>
    {external ? (
      <a href={link} className={classes.Link}>
        {children}
      </a>
    ) : (
      <Link to={link} className={classes.Link}>
        {children}
      </Link>
    )}
  </div>
);

export default hyperlink;
