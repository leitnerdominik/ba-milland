import React from 'react';

import Layout from '../components/Layout/Layout';

import classes from '../styles/pages/kontakt/kontakt.module.css';

const contact = () => (
  <Layout>
    <div className={classes.ContactContainer}>
      <h2>Kontakt</h2>
      <div>Bildungsausschuss Milland</div>
      <div>Dominik Leitner</div>
      <div>
        <a href="mailto:bildungsausschuss.milland@gmail.com">
          bildungsausschuss.milland@gmail.com
        </a>
      </div>
    </div>
  </Layout>
);

export default contact;
