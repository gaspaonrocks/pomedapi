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
    to: "/listview/user"
  },
  {
    key: "p",
    id: 2,
    text: "Billet",
    as: NavLink,
    name: "post",
    to: "/listview/post"
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
        <Dropdown placeholder='Select Category' fluid selection options={options} />
        <br />
        <Route exact /* the exact attributes is where its at */ path={`${this.props.match.path}/user`} component={ListUsers} />
        <Route exact /* the exact attributes is where its at */ path={`${this.props.match.path}/post`} component={ListPosts} />
      </div>
    );
  }
}
