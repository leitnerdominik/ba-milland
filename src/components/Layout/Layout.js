import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone, faGlobeAfrica, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../Footer/Footer';

import './Layout.css';

library.add(faEnvelope, faPhone, faGlobeAfrica, faAngleDown);

config.autoAddCss = false;

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawer: false,
    };

    this.sideDrawerClosedHandler = this.sideDrawerClosedHandler.bind(this);
    this.sideDrawerToggleHandler = this.sideDrawerToggleHandler.bind(this);
  }

  sideDrawerClosedHandler() {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerToggleHandler() {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
  }

  render() {
    const { children } = this.props;
    const { showSideDrawer } = this.state;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Bildungsausschuss Milland' },
                { name: 'keywords', content: 'Milland, Bildungsausschuss' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div className="outer-container">
              <Toolbar
                drawerClicked={this.sideDrawerToggleHandler}
                sideDrawerOpen={showSideDrawer}
                siteTitle={data.site.siteMetadata.title}
              />
              <SideDrawer
                open={showSideDrawer}
                closed={this.sideDrawerClosedHandler}
              />
              <main className="body-content">{children}</main>
              <Footer />
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
