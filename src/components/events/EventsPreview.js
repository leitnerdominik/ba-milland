import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Event from './EventPreview/EventPreview';

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
              date(formatString: "DD MMMM, YYYY", locale: "de")
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
      return (
      <>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Event 
            key={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            content={node.excerpt}
            path={node.fields.slug}/>
        ))}
      </>
      )}} 
  />
)

export default events;