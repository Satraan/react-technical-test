import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';
import ExpandedView from './ExpandedView/ExpandedView';
import Modal from 'react-modal';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
      this.setState({modalIsOpen: true});
    }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleClick () {
    this.openModal()
  }

  componentDidMount() {
    Modal.setAppElement('body');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users:data }));
  }

  render() {
    const { users } = this.state;

    return (
      <div id="app">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal">
            <ExpandedView />
          </Modal>

        <ul>
          {users.map(user =>
              <Card user={user} openModal={this.openModal}/>
          )}
        </ul>
      </div>

    );
  }
}

export default App;
