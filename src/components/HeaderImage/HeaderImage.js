import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

export default ({ fluid }) => {
  return (
  <div>
    <Img fluid={fluid} />
  </div>
  );
};