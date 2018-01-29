import React, { Component } from "react";
import "./MainView.css";

import Menu from "../menu/Menu";
import Content from "../content/Content";

export default class MainView extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-one-fifth">
          <Menu />
        </div>
        <div className="column">
          <Content />
        </div>
      </div>
    );
  }
}
