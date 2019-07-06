import React from "react";
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import img from '../../images/news/millanderdorf_2019.png'

const news = () => {
  return <div>
    <img src={img} />

  </div>;
};

export default news;
