import React, { Component } from "react";
import { Dropdown, Segment } from "semantic-ui-react";
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
    value: "Utilisateur",
    to: "/formfield/users"
  },
  {
    key: "p",
    id: 2,
    text: "Billet",
    as: NavLink,
    value: "Billet",
    to: "/formfield/posts"
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
        <h1>Choose what you are gonna add</h1>
        <Segment vertical>
          <Dropdown placeholder="Catégorie" selection options={options} />
        </Segment>
        <Segment vertical>
          <Route
            exact
            /* the exact attributes is where its at */ path={`${
              this.props.match.path
            }/users`}
            component={FormUser}
          />
          <Route
            exact
            /* the exact attributes is where its at */ path={`${
              this.props.match.path
            }/posts`}
            component={FormPost}
          />
        </Segment>
      </div>
    );
  }
}
