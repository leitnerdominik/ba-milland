import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import EventsPreview from '../components/EventsPreview/EventsPreview';

import classes from '../styles/pages/index/index.module.css';

class IndexPage extends Component {
  contentStart = React.createRef();

  scrollToContent = () => {
    this.contentStart.current.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <Layout>
        <Hero scrollToContent={this.scrollToContent} />
        <div ref={this.contentStart} className={classes.IndexContainer}>
          <EventsPreview />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
