import React from 'react';

import Layout from '../components/Layout/Layout';
import Card from '../components/Card/Card';

import chronik2020 from '../assets/Chronik2020.pdf';
import chronik2019 from '../assets/Chronik2019.pdf';

import classes from '../styles/pages/chronik/chronik.module.css';

const Chronik = () => {
  return (
    <Layout>
      <div className={classes.chronik}>
        <h1>Chronik</h1>
        <div className={classes.flex}>
        <Card title="Chronik 2019" file={chronik2019}>Chronik 2020</Card>
        <Card title="Chronik 2020" file={chronik2020}>Chronik 2020</Card>
        </div>
      </div>
    </Layout>
  )
};

export default Chronik;