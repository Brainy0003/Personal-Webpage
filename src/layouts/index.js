import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import normalize from 'normalize.css/normalize.css';
import Navbar from './navbar';
import Footer from './footer';
import './index.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'siteUrl', content: data.site.siteMetadata.siteUrl },
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <Navbar />
    {children()}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
        keywords
      }
    }
  }
`;
