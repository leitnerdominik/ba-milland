import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import moment from 'moment';

import Event from './Event/Event';
import mapClubToColor from '../../utils/badget-color';

import classes from './EventsPreview.module.css';

const events = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date_from], order: ASC }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date_from
                date_until
                time_from
                time_until
                club
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
      const postsOlderThanToday = data.allMarkdownRemark.edges.filter(
        ({ node }) => {
          const today = moment().startOf('day');
          const postDate = moment(node.frontmatter.date_from, 'DD.MM.YYYY');
          return today.isSameOrBefore(postDate);
        }
      );

      const events = postsOlderThanToday.map(({ node }) => {
        const badget = mapClubToColor(node.frontmatter.club.toString().toLowerCase());
        console.log(badget, node.frontmatter.club);
        return (
          <Event
            key={node.id}
            title={node.frontmatter.title}
            date_from={node.frontmatter.date_from}
            date_until={node.frontmatter.date_until}
            time_from={node.frontmatter.time_from}
            time_until={node.frontmatter.time_until}
            club={node.frontmatter.club}
            badgetColor={badget}
            path={node.fields.slug}
            content={node.excerpt}
          />
        );
      });

      const content =
        events.length > 0 ? (
          events
        ) : (
          <p className={classes.InfoText}>Keine Einträge gefunden!</p>
        );
      return (
        <>
          <h2 className={classes.Title}>Bevorstehende Veranstaltungen</h2>
          <div className={classes.EventsContainer}>{content}</div>
        </>
      );
    }}
  />
);

export default events;
