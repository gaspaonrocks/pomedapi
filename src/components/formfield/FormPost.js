import React, { Component } from "react";
import { Button, Form, Input, Select, TextArea } from "semantic-ui-react";
import FormService from "./FormService";
import { Redirect } from "react-router-dom";

// TODO : => pass the options to a config file
const options = [
  { key: "t1", text: "tag1", value: "tag1" },
  { key: "t2", text: "tag2", value: "tag2" }
];

export default class FormFieldPost extends Component {
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
    let post = {
      title: this.state.title,
      content: this.state.content,
      tags: this.state.tags,
      author: "Sacha GRASSO"
    };
    // TODO : => penser à tester dans le même environnement ou à trouver un moyen de les faire communiquer
    return FormService.posts
      .post(post)
      .then(response => {
        console.log(response);
        this.setState({ redirect: true });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/listview/posts" />;
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field
          control={Input}
          name="title"
          label="Title"
          placeholder="Title"
          onChange={this.handleChange}
        />
        <Form.Field
          control={TextArea}
          name="content"
          label="Content"
          placeholder="Tell us more..."
          onChange={this.handleChange}
        />
        <Form.Field
          control={Select}
          name="tags"
          label="Catégorie"
          options={options}
          placeholder="Etiquettes"
          onChange={this.handleChange}
        />
        {/* TODO : => ajouter un tableau pour pusher les tags dedans après sélection, et la possibilité de les enlever */}
        <Form.Button control={Button}>Submit</Form.Button>
      </Form>
    );
  }
}
