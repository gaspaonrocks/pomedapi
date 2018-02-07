import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import "./MainView.css";

import Routes from "../../config/Routes";

export default class MainView extends Component {
  render() {
    return (
      <div>
        <Container text>
          <Routes />
        </Container>
      </div>
    );
  }
}
