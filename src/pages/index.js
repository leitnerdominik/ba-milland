import React from 'react';

import Layout from '../components/Layout/Layout';
import HeaderImage from '../components/HeaderImage/HeaderImage';
import EventsPreview from '../components/events/EventsPreview';

import classes from './index.module.css'

const IndexPage = ({ data }) => {
  
  const {placeholderImage: { childImageSharp: { fluid }}} = data; 
  return (
    <Layout>
      <div className={classes.ImageContainer}>
        <HeaderImage fluid={fluid}/>
      </div>
      <EventsPreview />
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
    query {
      placeholderImage: file(relativePath: { eq: "vereine_header_image_2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
`;
