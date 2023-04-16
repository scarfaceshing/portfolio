import { ThemeProvider } from '@emotion/react';
import { Typography } from '@mui/material';
import React, { Component } from 'react';
import Cover from '../src/component/Cover'
import theme from './theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Cover>
          <Typography>Test</Typography>
        </Cover>
      </ThemeProvider>
    )
  };
}

export default App;
