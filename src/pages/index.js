import React, { Component } from "react";

import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import AboutUs from "../components/AboutUs/AboutUs";
import EventsPreview from "../components/EventsPreview/EventsPreview";

import classes from "../styles/pages/index/index.module.css";

class IndexPage extends Component {
  contentStart = React.createRef();

  scrollToContent = () => {
    this.contentStart.current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  render() {
    return (
      <Layout>
        <Hero scrollToContent={this.scrollToContent} />
        <div ref={this.contentStart} className={classes.IndexContainer}>
          <AboutUs>
            <div>
              <h2>Willkommen</h2>
              <p>
                Willkommen auf der Website des Bildungsausschuss Milland. Ziel
                dieser Website ist es, Sie über bevorstehende Veranstaltungen in
                Milland zu informieren und Ihnen die Vereinslandschaft Millands
                näherzubringen.
              </p>
            </div>
            <div>
              <h2>Über uns</h2>
              <p>
                Ein Bildungsausschuss ist eine Arbeitsgemeinschaft der Vereine
                eines Dorfes, die sich zum Ziel setzt, Weiterbildung im Dorf zu
                fördern. Auch der Bildungsausschuss Milland fördert lokale
                Initiativen, die das Zusammenleben weiterentwickeln. Projekte
                sind die MiZe und diese Website.
              </p>
            </div>
          </AboutUs>
          <EventsPreview />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
