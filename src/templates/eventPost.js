import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h3><b>Ort: </b> {post.frontmatter.place}</h3>
        <h3><b>Zeit: </b> {post.frontmatter.time}</h3>
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
