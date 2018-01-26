import React, { Component } from "react";
import "./App.css";

import Toolbar from "./toolbar/Toolbar";
import Menu from "./menu/Menu";

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
        <Menu />
      </div>
    );
  }
}

export default App;
