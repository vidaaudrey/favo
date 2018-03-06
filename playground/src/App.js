import React, { Component } from 'react';
import {
  UniversalBlock,
  CustomBlock,
  SuccessStoriesMDP,
  AboutMasterTrack,
  AboutMasterTrackBase,
  EarnCreditMDP,
} from 'favo';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App text-xs-left">
        <h1>Favo Playground</h1>
        <EarnCreditMDP />
        <AboutMasterTrackBase />
        <AboutMasterTrack />
        <CustomBlock />
        <UniversalBlock />
        <SuccessStoriesMDP />
      </div>
    );
  }
}

export default App;
