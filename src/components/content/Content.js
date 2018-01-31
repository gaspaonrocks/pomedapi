import React, { Component } from "react";

import Routes from "../../config/Routes";

import "./Content.css";
import "font-awesome/css/font-awesome.min.css";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      agreed: false,
      question: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    let FORM = document.querySelector("form");
    var dataForm = new FormData(FORM);
    let output = "";
    for (const entry of dataForm) {
      output = entry[0] + "=" + entry[1] + "\r";
    }
    console.log(
      `${this.state.name} just submitted ${this.state.message} and answered ${
        this.state.question
      }`,
      output
    );
    event.preventDefault();
  }

  render() {
    return (
      <form className="container is-fluid" onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <div className="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Textarea"
              value={this.state.message}
              onChange={this.handleInputChange}
              name="message"
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                value={this.state.agreed}
                onChange={this.handleInputChange}
                name="agreed"
              />
              I agree to the terms and conditions
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                value="yes"
                name="question"
                onChange={this.handleInputChange}
              />
              Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                value="no"
                name="question"
                onChange={this.handleInputChange}
              />
              No
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </div>
        <Routes />
      </form>
    );
  }
}
