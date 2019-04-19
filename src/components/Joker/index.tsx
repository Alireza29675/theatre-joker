import React, { Component } from 'react';

import Face from './Face';

class App extends Component {
  render() {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 319 440"
        version="1.1"
        style={
          {
            fillRule:"evenodd",
            clipRule:"evenodd",
            strokeLinejoin:"round",
            strokeMiterlimit:1.41421,
          }
        }
      >
        <Face />
      </svg>
    );
  }
}

export default App;
