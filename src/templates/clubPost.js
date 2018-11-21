import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout/Layout';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.name}</p>
        <p>{post.frontmatter.email}</p>
        <p>{post.frontmatter.tel}</p>
        <p>{post.frontmatter.website}</p>
        <Img fluid={post.frontmatter.bannerImg.childImageSharp.fluid} />
        <Img fluid={post.frontmatter.avatarImg.childImageSharp.fluid} />
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
        name
        email
        tel
        website
        bannerImg {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        avatarImg {
          childImageSharp {
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;
