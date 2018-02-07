import React, { Component } from "react";
import { Form, Select } from "semantic-ui-react";
import { Route, NavLink } from "react-router-dom";
import FormUser from "./FormUser";
import FormPost from "./FormPost";

// TODO : => pass the 'options' to a config file
const options = [
  {
    key: "u",
    id: 1,
    text: "Utilisateur",
    as: NavLink,
    name: "user",
    to: "/formfield/user"
  },
  {
    key: "p",
    id: 2,
    text: "Billet",
    as: NavLink,
    name: "post",
    to: "/formfield/post"
  }
];

export default class FormField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Field control={Select} name="formType" label="Catégorie" options={options} placeholder="Catégorie" />
        </Form>
        <br />
        <Route exact /* the exact attributes is where its at */ path={`${this.props.match.path}/user`} component={FormUser} />
        <Route exact /* the exact attributes is where its at */ path={`${this.props.match.path}/post`} component={FormPost} />
      </div>
    );
  }
}
