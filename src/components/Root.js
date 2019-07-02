import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import LayoutContext from 'context';

// eslint-disable-next-line react/prop-types
const Root = ({ children }) => (
  <LayoutContext.Provider>
    <CssBaseline />
    {children}
  </LayoutContext.Provider>
);

Root.propTypes = {};
Root.defaultProps = {};

export default Root;
