import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";

import classes from "./eventPost.module.css";

export default ({ data }) => {
  const post = data.markdownRemark;

  let place = null,
    time = null,
    date = null;

  if (post.frontmatter.place) {
    place = (
      <p>
        <b>Veranstaltungsort: </b> {post.frontmatter.place}
      </p>
    );
  }

  if (post.frontmatter.date_from && post.frontmatter.date_until) {
    date = (
      <p>
        <b>Datum: </b> {post.frontmatter.date_from} -{" "}
        {post.frontmatter.date_until}
      </p>
    );
  } else if (post.frontmatter.date_from) {
    date = (
      <p>
        <b>Datum: </b> {post.frontmatter.date_from}
      </p>
    );
  }

  if (post.frontmatter.time_from && post.frontmatter.time_until) {
    time = (
      <p>
        <b>Zeit: </b> {post.frontmatter.time_from} -{" "}
        {post.frontmatter.time_until}
      </p>
    );
  } else if (post.frontmatter.time_from) {
    time = (
      <p>
        <b>Zeit: </b> {post.frontmatter.time_from}
      </p>
    );
  }

  return (
    <Layout>
      <div className={classes.EventContainer}>
        <h1>{post.frontmatter.title}</h1>
        {place}
        {date}
        {time}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        date_from
        date_until
        time_from
        time_until
        place
      }
    }
  }
`;
