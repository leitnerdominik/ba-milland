import React from 'react';
import Layout from '../components/Layout/Layout';

import classes from './404.module.css';

const NotFoundPage = () => (
  <Layout>
    <div className={classes.NotFoundContainer}>
      <h1>404 Seite nicht gefunden</h1>
      <p>Du bist gerade auf eine Route gestoßen, die es nicht gibt....</p>
    </div>
  </Layout>
);

export default NotFoundPage;
