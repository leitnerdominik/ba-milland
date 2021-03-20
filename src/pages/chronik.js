import React from "react";

import Layout from "../components/Layout/Layout";
import Card from "../components/Card/Card";

import chronik2020 from "../assets/Chronik2020.pdf";
import chronik2019_01 from "../assets/Chronik2019-part01.pdf";
import chronik2019_02 from "../assets/Chronik2019-part02.pdf";

import classes from "../styles/pages/chronik/chronik.module.css";

const Chronik = () => {
  return (
    <Layout>
      <div className={classes.chronik}>
        <h1>Chronik</h1>
        <div className={classes.flex}>
          <Card title="Chronik 2019">
          <div className={classes.LinkContainer}>
            <a href={chronik2019_01}>
              TEIL 1
            </a>
            <a href={chronik2019_02}>
              TEIL 2
            </a>
            </div>
          </Card>
          <Card title="Chronik 2020">
            <div className={classes.LinkContainer}>
            <a href={chronik2020}>
              ÖFFNEN
            </a>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Chronik;
