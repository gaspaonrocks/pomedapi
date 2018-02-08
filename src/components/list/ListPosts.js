import React, { Component } from "react";
import { Grid, Card, Icon } from "semantic-ui-react";
import axios from "axios";
import ListService from "./ListService";

export default class ListPostsView extends Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    return axios
      .get("http://localhost:12345/posts")
      .then(response => {
        this.setState({
          posts: response.data.map(e => {
            return (
              <Grid.Column key={e.id}>
                <Card>
                  <Card.Content>
                    <Card.Header>{e.title}</Card.Header>
                    <Card.Description>{e.content}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="tag" />
                      {e.tags}
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
      <Grid centered columns={3}>
        {this.renderRows(this.createRows(this.state.posts))}
      </Grid>
    );
  }

  createRows(posts) {
    return ListService.createRows(posts);
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
}
