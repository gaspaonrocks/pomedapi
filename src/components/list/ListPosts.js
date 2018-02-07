import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

import axios from 'axios';

export default class ListPostsView extends Component {
  constructor() {
    super()
    this.state = { posts: [] };
  }

  componentDidMount() {
    return axios.get('http://localhost:12345/posts')
      .then(response => {
        this.setState({
          posts: response.data.map(e => {
            return (
              <Card key={e.id}>
                <Card.Content>
                  <Card.Header>
                    {e.title}
                  </Card.Header>
                  <Card.Description>
                    {e.content}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a><Icon name='tag' />{e.tags}</a>
                </Card.Content>
              </Card>
            )
          })
        })
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <ul>{this.state.posts}</ul>
    );
  }
}