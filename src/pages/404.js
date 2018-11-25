import React from 'react';
import Layout from '../components/Layout/Layout';

import classes from './404.module.css';

const NotFoundPage = () => (
  <Layout>
    <div className={classes.NotFoundContainer}>
      <h1>404 Seite nicht gefunden</h1>
      <p>Du bist gerade auf eine Route gestoßen, die es nicht gibt....</p>
      <img src="https://cdn.pixabay.com/photo/2017/07/27/19/03/doll-2546360_960_720.png" />
    </div>
  </Layout>
);

export default NotFoundPage;
