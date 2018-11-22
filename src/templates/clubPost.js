import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout/Layout';

import classes from './clubPost.module.css';

export default ({ data }) => {
  console.log(data);
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className={classes.ClubPostContainer}>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <Img className={classes.BannerImage} fixed={post.frontmatter.bannerImg.childImageSharp.fixed} />
          <div dangerouslySetInnerHTML={{ __html: post.html}} />
        </div>
        <div className={classes.OuterAvatarContainer}>
          <div className={classes.AvatarContainer}>
            <Img className={classes.AvatarImage} fixed={post.frontmatter.avatarImg.childImageSharp.fixed} />
            <div className={classes.AvatarDetails}>
              <p><b>Name: </b>{post.frontmatter.name}</p>
              <p><b>Email: </b>{post.frontmatter.email}</p>
              <p><b>Tel: </b>{post.frontmatter.tel}</p>
              <p><b>Webseite: </b>{post.frontmatter.website}</p>
            </div>
          </div>
        </div>
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
            fixed(width: 300, height: 225) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        avatarImg {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
