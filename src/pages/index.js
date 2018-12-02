import React from 'react';

import Layout from '../components/Layout/Layout';
import HeaderImage from '../components/HeaderImage/HeaderImage';
import EventsPreview from '../components/EventsPreview/EventsPreview';

const IndexPage = () => {
   
  return (
    <Layout>
      <HeaderImage />
      <EventsPreview />
    </Layout>
  );
}

export default IndexPage;
