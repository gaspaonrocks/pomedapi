import React, { Component } from "react";
import { Button, Dropdown, Icon, Segment } from "semantic-ui-react";
import { Route, NavLink } from "react-router-dom";

import ListUsers from "./ListUsers";
import ListPosts from "./ListPosts";

// TODO : => pass the 'options' to a config file
const options = [
  {
    key: "u",
    id: 1,
    text: "Users",
    as: NavLink,
    to: "/listview/users",
    value: "users"
  },
  {
    key: "p",
    id: 2,
    text: "Posts",
    as: NavLink,
    to: "/listview/posts",
    value: "posts"
  }
];

export default class ListView extends Component {
  constructor() {
    super();
    this.state = { target: "" };
  }

  handleChange = (e, data) => {
    this.setState({ target: data.value });
  };

  render() {
    return (
      <div>
        <h1>Choose what you are gonna list</h1>
        <Segment vertical>
          <NavLink to={`/formfield/${this.state.target}`}>
            <Button color="teal" icon>
              <Icon name="add" />
            </Button>
          </NavLink>
          <Dropdown
            placeholder="Catégorie"
            selection
            options={options}
            onChange={this.handleChange}
          />
        </Segment>
        <Segment vertical>
          <Route
            exact
            /* the exact attributes is where its at */ path={`${
              this.props.match.path
            }/users`}
            component={ListUsers}
          />
          <Route
            exact
            /* the exact attributes is where its at */ path={`${
              this.props.match.path
            }/posts`}
            component={ListPosts}
          />
        </Segment>
      </div>
    );
  }
}
