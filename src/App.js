import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import MainView from "./components/mainview/MainView";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <MainView />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
