import React, { Component } from "react";
import { Grid, Card, Icon, Image } from "semantic-ui-react";
import ListService from "./ListService";
import "./ListUsers.css";
import axios from "axios";

export default class ListUsersView extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    // TODO : => extraire cette logique et l'inclure dans un service, voire dans un HighOrderComponent
    return axios
      .get("http://localhost:12345/users")
      .then(response => {
        this.setState({
          users: response.data.map(e => {
            return (
              <Grid.Column key={e.firstName + e.lastName}>
                <Card>
                  <Image src={this.selectImage(e)} className="center-img" />
                  <Card.Content>
                    <Card.Header>{e.firstName + " " + e.lastName}</Card.Header>
                    <Card.Meta>
                      <span className="date">{e.contract}</span>
                      <span className="date">{e.email}</span>
                    </Card.Meta>
                    <Card.Description>{e.about}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" /> 22 Friends
                    </a>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Grid centered columns={3}>
          {this.renderRows(this.createRows(this.state.users))}
        </Grid>
      </div>
    );
  }

  createRows(users) {
    return ListService.createRows(users);
  }

  renderRows(rows) {
    return rows.map((row, index) => {
      return (
        <Grid.Row key={index}>
          <Card.Group>{row}</Card.Group>
        </Grid.Row>
      );
    });
  }

  selectImage(user) {
    return user.gender === "male"
      ? "https://randomuser.me/api/portraits/men/83.jpg"
      : "https://randomuser.me/api/portraits/women/83.jpg";
  }
}
