import React from 'react';

import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import EventsPreview from '../components/EventsPreview/EventsPreview';

const IndexPage = () => {
   
  return (
    <Layout>
      <Hero />
      <EventsPreview />
    </Layout>
  );
}

export default IndexPage;
