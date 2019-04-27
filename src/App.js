import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';
import ExpandedView from './ExpandedView/ExpandedView';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users:data }));
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <ul>
          {users.map(user =>
              <Card user={user} />

          )}
        </ul>
      </div>

    );
  }
}

export default App;
