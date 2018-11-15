import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Footer from '../Footer/Footer';

import classes from './Layout.module.css';

const Layout = ({ children }) => (
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
        <Toolbar siteTitle={data.site.siteMetadata.title} />
        <div className={classes.BodyContent}>
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
