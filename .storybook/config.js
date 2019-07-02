import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './global.css';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);

const baseTheme = createMuiTheme();
const ThemeDecorator = storyFn => (
  <>
    <CssBaseline />
    <ThemeProvider theme={baseTheme}>
      {storyFn()}
    </ThemeProvider>
  </>
);

function loadStories() {
  addDecorator(ThemeDecorator);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
