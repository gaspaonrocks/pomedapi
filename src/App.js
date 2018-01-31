import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Toolbar from "./components/toolbar/Toolbar";
import MainView from "./components/mainview/MainView";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Toolbar />
          <MainView />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
