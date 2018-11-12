import React from 'react';

import Layout from '../components/Layout/Layout';
import HeaderImage from '../components/HeaderImage/HeaderImage';
import EventsPreview from '../components/events/EventsPreview';

import classes from './index.module.css'

const IndexPage = () => {
   
  return (
    <Layout>
      <div className={classes.ImageContainer}>
        <HeaderImage />
      </div>
      <EventsPreview />
    </Layout>
  );
}

export default IndexPage;
