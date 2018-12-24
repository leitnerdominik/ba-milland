import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import EventsPreview from '../components/EventsPreview/EventsPreview';

import classes from './index.module.css';

class IndexPage extends Component {
  contentStart = React.createRef();

  scrollToContent = e => {
    this.contentStart.current.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };

  render() {
    const logo = this.props.data.file.childImageSharp.fluid;
    return (
      <Layout>
        <Hero scrollToContent={this.scrollToContent} logo={logo} />
        <div ref={this.contentStart} className={classes.IndexContainer}>
          <EventsPreview />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;

export const query = graphql`
query {
  file(relativePath: { eq: "images/bildungsausschuss-logo-big.png" }) {
    childImageSharp {
      fluid(maxHeight: 250, maxWidth: 250) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
