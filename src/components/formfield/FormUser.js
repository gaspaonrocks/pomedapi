import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea
} from "semantic-ui-react";

// TODO : => pass the options to a config file
const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" }
];

export default class FormFieldUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleForm = (e, data) => {};

  handleChange = (e, data) => {
    data.type === "checkbox"
      ? this.setState({ [data.name]: data.checked })
      : this.setState({ [data.name]: data.value });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
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
        <Checkbox
          label="I agree with the ToA"
          name="agreedOn"
          checked={this.state.agreedOn}
          onChange={this.handleChange}
        />
        <br /><br />
        <Form.Button control={Button}>Submit</Form.Button>
      </Form>
    );
  }
}
