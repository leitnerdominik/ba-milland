import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import moment from 'moment';

import Event from './Event/Event';

import classes from './EventsPreview.module.css';

const events = () => (
  <StaticQuery
    query={graphql`query {
      allMarkdownRemark(sort: { fields: [frontmatter___date_from], order: ASC }) {
        edges {
          node {
            id
            frontmatter {
              title
              date_from
              date_until
              time_from
              time_until
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `}
    render={data => {
      const postsOlderThanToday = data.allMarkdownRemark.edges.filter(({node}) => {
        const today = moment().startOf('day');
        const postDate = (moment(node.frontmatter.date_from, "DD.MM.YYYY"));
        return today.isSameOrBefore(postDate);
      });

      const events = postsOlderThanToday.map(({ node }) => (
        <Event 
          key={node.id}
          title={node.frontmatter.title}
          date_from={node.frontmatter.date_from}
          date_until={node.frontmatter.date_until}
          time_from={node.frontmatter.time_from}
          time_until={node.frontmatter.time_until}
          path={node.fields.slug}
          content={node.excerpt}
          />
      ));

      const content = events.length > 0 ? events : <p className={classes.InfoText}>Keine Einträge gefunden!</p>
      return (
      <>
        <h2 className={classes.Title}>Bevorstehende Veranstaltungen</h2>
        {content}
      </>
      )}} 
  />
)

export default events;
