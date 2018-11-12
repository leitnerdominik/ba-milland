import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Event from '../components/events/Event/Event';

const veranstaltungen = ({data}) => {
  const events = data.allMarkdownRemark.edges.map(({node}) => (
    <Event
      key={node.id}
      title={node.frontmatter.title}
      date={node.frontmatter.date}
      content={node.excerpt}
      path={node.fields.slug}/>
  ));
  return (
    <Layout>
      <div>
        <div>
          {events}
        </div>
      </div>
    </Layout>
  );
};

export default veranstaltungen;

export const query = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
`;