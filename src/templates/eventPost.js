import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';

import classes from './eventPost.module.css';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className={classes.EventContainer}>
        <h1>{post.frontmatter.title}</h1>
        <p><b>Veranstaltungsort: </b> {post.frontmatter.place}</p>
        <p><b>Zeit: </b> {post.frontmatter.time}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html}} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        place
        time
      }
    }
  }
`;
