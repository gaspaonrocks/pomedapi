import React, { Component } from "react";
import "./Toolbar.css";
import "font-awesome/css/font-awesome.min.css";

class Toolbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar is-navbar">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://github.com/gaspaonrocks/pomedapi">
              <img src="https://www.avisdemamans.com/images/article/2013-header-logo-pomme-d-api_link-header.png" alt="Pomedapi: best daycare for children... and their parents" />
            </a>
            <div className="button navbar-burger" >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item"><i className="fa fa-home fa-2x icon-white" aria-hidden="true"></i></a>
            </div>

            <div className="navbar-end">
            <a className="navbar-item"><i className="fa fa-envelope fa-2x icon-white" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
