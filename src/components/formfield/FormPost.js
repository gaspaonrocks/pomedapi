import React, { Component } from "react";
import {
  Button,
  Form,
  Input,
  Select,
  TextArea
} from "semantic-ui-react";

// TODO : => pass the options to a config file
const options = [
  { key: "t1", text: "tag1", value: "tag1" },
  { key: "t2", text: "tag2", value: "tag2" }
];

export default class FormFieldPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleForm = (e, data) => { };

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
      author: this.state.author
    };
    // TODO : => penser à tester dans le même environnement ou à trouver un moyen de les faire communiquer
    fetch("http://localhost:12345/api/blog-posts", { method: "POST", body: post })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field control={Input} name="title" label="Title" placeholder="Title" onChange={this.handleChange} />
        <Form.Field control={TextArea} name="about" label="About" placeholder="Tell us more about him/her..." onChange={this.handleChange} />
        <Form.Field control={Select} name="tags" label="Catégorie" options={options} placeholder="Etiquettes" onChange={this.handleChange} />
        {/* TODO : => ajouter un tableau pour pusher les tags dedans après sélection, et la possibilité de les enlever */}
        <br /><br />
        <Form.Button control={Button}>Submit</Form.Button>
      </Form>
    );
  }
}
