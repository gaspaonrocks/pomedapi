import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

import './ListUsers.css';

import axios from 'axios';

export default class ListUsersView extends Component {
  constructor() {
    super()
    this.state = { users: [] };
  }

  componentDidMount() {
    return axios.get('http://localhost:12345/users')
      .then(response => {
        this.setState({
          users: response.data.map(e => {
            return (
              <Card key={e.firstName + e.lastName}>
                <Image src={this.selectImage(e)} className="center-img"/>
                <Card.Content>
                  <Card.Header>
                    {e.firstName + ' ' + e.lastName}
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      {e.contract}
                    </span>
                    <span className='date'>
                      {e.email}
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    {e.about}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a><Icon name='user' /> 22 Friends</a>
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
      <div>
        <ul>{this.state.users}</ul>
      </div>
    );
  }

  selectImage(user) {
    return user.gender === 'male' ? 'https://randomuser.me/api/portraits/men/83.jpg' : 'https://randomuser.me/api/portraits/women/83.jpg'
  }
}