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

      const sortEvents = postsOlderThanToday.sort((nodeA, nodeB) => {
        const d1 = moment(nodeA.node.frontmatter.date_from, 'DD.MM.YYYY');
        const d2 = moment(nodeB.node.frontmatter.date_from, 'DD.MM.YYYY');
        return moment.utc(d1).diff(moment.utc(d2));
      });

      const events = sortEvents.map(({ node }) => {
        const badget = mapClubToColor(
          node.frontmatter.club.toString().toLowerCase()
        );
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
          <div className={classes.InfoText}><span>Keine Einträge gefunden!</span></div>
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
