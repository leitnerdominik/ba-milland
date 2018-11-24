import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout/Layout';

import classes from './clubPost.module.css';

export default ({ data }) => {
  console.log(data);
  const post = data.markdownRemark.frontmatter;
  const html = data.markdownRemark.html;


  const bannerImg = post.bannerImg !== null ? <img className={classes.BannerImage} src={post.bannerImg.childImageSharp.resize.src} /> : null;
  const avatarImg = post.avatarImg !== null ? <img className={classes.AvatarImage} src={post.avatarImg.childImageSharp.resize.src} /> : null;
  
  const name = post.name !== null ? <p><b>Name: </b>{post.name}</p> : null;
  const email = post.email !== null ? <p><b>Email: </b><a href={`mailto:${post.email}`}>{post.email}</a></p> : null;
  const tel = post.tel !== null ? <p><b>Tel: </b>{post.tel}</p> : null;
  const website = post.website !== null ? <p><b>Webseite: </b><a href={`http://${post.website}`}>{post.website}</a></p> : null;

  return (
    <Layout>
      <div className={classes.ClubPostContainer}>
        <div>
          <h1>{post.title}</h1>
          {bannerImg}
            <div className={classes.Content} dangerouslySetInnerHTML={{ __html: html}} />
        </div>
        <div className={classes.OuterPersonContainer}>
          <div className={classes.PersonContainer}>
            <div className={classes.AvatarContainer}>
              {avatarImg}
              <div className={classes.Shadow}></div>
            </div>
            <div className={classes.AvatarDetails}>
              {name}
              {email}
              {tel}
              {website}
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
            resize(width: 300, quality: 100) {
              src
            }
          }
        }
        avatarImg {
          childImageSharp {
            resize(width: 250, quality: 75) {
              src
            }
          }
        }
      }
    }
  }
`;
