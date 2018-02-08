import React, { Component } from "react";
import {
  Button,
  Form,
  Input,
  Radio,
  Select,
  TextArea
} from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import FormService from "./FormService";

// TODO : => pass the options to a config file
const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" }
];

export default class FormFieldUser extends Component {
  constructor() {
    super();
    this.state = { redirect: false };
  }

  handleForm = (e, data) => {};

  handleChange = (e, data) => {
    data.type === "checkbox"
      ? this.setState({ [data.name]: data.checked })
      : this.setState({ [data.name]: data.value });
  };

  handleSubmit = () => {
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      gender: this.state.gender,
      contract: this.state.contract,
      about: this.state.about
    };
    return FormService.users
      .post(user)
      .then(response => {
        console.log(response);
        this.setState({ redirect: true });
      })
      .catch(error => console.log(error));
    /*  return axios
      .post("http://localhost:12345/users", user)
      .then(response => {
        console.log(response);
        this.setState({ redirect: true });
      })
      .catch(error => console.log(error)); */
    // TODO : => penser à tester dans le même environnement ou à trouver un moyen de les faire communiquer
    /* fetch("http://localhost:12345/users", { method: "POST", body: user })
      .then(response => console.log(response))
      .catch(error => console.log(error)); */
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/listview/users" />;
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="firstName"
            label="First name"
            placeholder="First name"
            onChange={this.handleChange}
          />
          <Form.Field
            control={Input}
            name="lastName"
            label="Last name"
            placeholder="Last name"
            onChange={this.handleChange}
          />
          <Form.Field
            control={Select}
            name="gender"
            label="Gender"
            options={options}
            placeholder="Gender"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Field
          control={Input}
          name="email"
          label="Email"
          placeholder="Email"
          onChange={this.handleChange}
        />

        <Form.Group inline>
          <label>Contrat</label>
          <Form.Field
            control={Radio}
            name="contract"
            label="Temps Plein"
            value="fullTime"
            checked={this.state.contract === "fullTime"}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            name="contract"
            label="Temps Partiel"
            value="partTime"
            checked={this.state.contract === "partTime"}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          name="about"
          label="About"
          placeholder="Tell us more about him/her..."
          onChange={this.handleChange}
        />
        <Form.Button control={Button}>Submit</Form.Button>
      </Form>
    );
  }
}
