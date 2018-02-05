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

import manifest from "./FormManifest.json";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" }
];

export default class FormExampleFieldControl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleForm = (e, data) => {};

  handleChange = (e, data) => {
    console.log(manifest);
    data.type === "checkbox"
      ? this.setState({ [data.name]: data.checked })
      : this.setState({ [data.name]: data.value });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    let formType = this.state.formtype;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field control={Radio} name="formtype" label="Billet" value="post" checked={this.state.formtype === "post"} onChange={this.handleChange} />
          <Form.Field control={Radio} name="formtype" label="Membre" value="user" checked={this.state.formtype === "user"} onChange={this.handleChange} />
        </Form.Group>

        {formType === "post" && (
          <Form.Group width="equal">
            <Form.Field control={Input} name="title" label="Titre" placeholder="Titre..." onChange={this.handleChange} />
          </Form.Group>
        )}

        {formType === "user" && (
          <Form.Group widths="equal">
          <Form.Field control={Input} name="firstName" label="First name" placeholder="First name" onChange={this.handleChange} />
          <Form.Field control={Input} name="lastName" label="Last name" placeholder="Last name" onChange={this.handleChange} />
          <Form.Field control={Select} name="gender" label="Gender" options={options} placeholder="Gender" onChange={this.handleChange} />
        </Form.Group>
        )}

        
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field
            control={Radio}
            name="quantity"
            label="One"
            value="1"
            checked={this.state.quantity === "1"}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            name="quantity"
            label="Two"
            value="2"
            checked={this.state.quantity === "2"}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            name="quantity"
            label="Three"
            value="3"
            checked={this.state.quantity === "3"}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="About"
          placeholder="Tell us more about you..."
        />
        <Checkbox
          label="I agree with the ToA"
          name="agreedOn"
          checked={this.state.agreedOn}
          onChange={this.handleChange}
        />
        <Form.Button control={Button}>Submit</Form.Button>
      </Form>
    );
  }
}
