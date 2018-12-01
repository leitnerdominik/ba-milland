import React from 'react';

import Layout from '../components/Layout/Layout';
import HeaderImage from '../components/HeaderImage/HeaderImage';
import Events from '../components/EventsPreview/EventsPreview';

const IndexPage = () => {
   
  return (
    <Layout>
      <HeaderImage />
      <Events />
    </Layout>
  );
}

export default IndexPage;
