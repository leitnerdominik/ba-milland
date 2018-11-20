import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import moment from 'moment';

import Event from './Event/Event';

const events = () => (
  <StaticQuery
    query={graphql`query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD.MM.YYYY", locale: "de")
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
        const postDate = (moment(node.frontmatter.date, "DD.MM.YYYY"));
        return today.isSameOrBefore(postDate);
      });

      const events = postsOlderThanToday.map(({ node }) => (
        <Event 
          key={node.id}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          content={node.excerpt}
          path={node.fields.slug}/>
      ));

      const content = events.length > 0 ? events : <p>Keine Einträge gefunden!</p>
      return (
      <>
        <h2>Bevorstehende Veranstaltungen</h2>
        {content}
      </>
      )}} 
  />
)

export default events;