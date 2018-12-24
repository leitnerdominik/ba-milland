import React from 'react';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/Layout/Layout';

import classes from './clubPost.module.css';

export default ({ data }) => {
  const post = data.markdownRemark.frontmatter;
  const html = data.markdownRemark.html;


  const bannerImg = post.bannerImg !== null ? <img className={classes.BannerImage} alt="banner" src={post.bannerImg.childImageSharp.resize.src} /> : null;
  const avatarImg = post.avatarImg !== null ? <img className={classes.AvatarImage} alt="avatar" src={post.avatarImg.childImageSharp.resize.src} /> : null;
  
  const name = post.name !== null ? <p className={classes.Name}>{post.name}</p> : null;
  const email = post.email !== null ? <p><FontAwesomeIcon icon="envelope" /> <a href={`mailto:${post.email}`}>{post.email}</a></p> : null;
  const tel = post.tel !== null ? <p><FontAwesomeIcon icon="phone" /> {post.tel}</p> : null;
  const website = post.website !== null ? <p><FontAwesomeIcon icon="globe-africa" /><a href={`http://${post.website}`}>{post.website}</a></p> : null;

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
