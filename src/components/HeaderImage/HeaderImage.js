import React from 'react';
import Img from 'gatsby-image';

export default ({ fluid }) => {
  return (
  <div>
    <Img fluid={fluid} />
  </div>
  );
};