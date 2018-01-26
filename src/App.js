import React, { Component } from "react";
import "./App.css";

import Toolbar from "./toolbar/Toolbar";
import MainView from "./mainview/MainView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        {/*
        * Maybe create a full width Main view
        * then inside have a side menu
        * and have a content view in the middle...
        */}
        <MainView />
      </div>
    );
  }
}

export default App;
