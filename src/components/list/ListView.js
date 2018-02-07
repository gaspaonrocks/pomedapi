import React, { Component } from "react";
import { Dropdown } from 'semantic-ui-react'
import { Route, NavLink } from "react-router-dom";

import ListUsers from './ListUsers';
import ListPosts from './ListPosts';

// TODO : => pass the 'options' to a config file
const options = [
  {
    key: "u",
    id: 1,
    text: "Utilisateur",
    as: NavLink,
    name: "user",
    to: "/listview/users"
  },
  {
    key: "p",
    id: 2,
    text: "Billet",
    as: NavLink,
    name: "post",
    to: "/listview/posts"
  }
];

export default class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Choose what you are gonna list</h1>
        <Dropdown placeholder='Select Category' fluid selection options={options} />
        <br />
        <Route exact /* the exact attributes is where its at */ path={`${this.props.match.path}/users`} component={ListUsers} />
        <Route exact /* the exact attributes is where its at */ path={`${this.props.match.path}/posts`} component={ListPosts} />
      </div>
    );
  }
}
