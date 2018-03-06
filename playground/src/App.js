import React, { Component } from "react";
import {
  UniversalBlock,
  CustomBlock,
  SuccessStoriesMDP,
  AboutMasterTrack
} from "favo";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App text-xs-left">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <AboutMasterTrack />
        <CustomBlock />
        <UniversalBlock />
        <SuccessStoriesMDP />
      </div>
    );
  }
}

export default App;
