import React from "react";

import Layout from "../components/Layout/Layout";

import classes from '../styles/pages/publicPosts/publicPosts.module.css'

const publicPosts = () => {
  return (
    <Layout>
      <div className={classes.Container}>
        <h2>Öffentlichen Beiträge</h2>

        <p>Bildungsausschuss Milland EO</p>
        <p>Steuernummer 90009190217</p>
        <p>Mitglieder der Organisation: 21</p>
        <p>Gründungsjahr: 2007</p>

        <h3>2020</h3>
        <p>Grund: Finanzierung der Bildungsausschüsse</p>
        <p>Auszahlende Körperschaft: Stadtgemeinde Brixen</p>
        <p>Beitragshöhe: 10.848,00€</p>
        <p>Datum der Auszahlung: 06.03.2020</p>

        <h3>2021</h3>
        <p>Grund: Finanzierung der Bildungsausschüsse</p>
        <p>Auszahlende Körperschaft: Stadtgemeinde Brixen</p>
        <p>Beitragshöhe: 10.932,66€</p>
        <p>Datum der Auszahlung: 29.03.202</p>
      </div>
    </Layout>
  );
};

export default publicPosts;
