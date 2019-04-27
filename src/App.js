import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import ExpandedView from './ExpandedView/ExpandedView';
import Modal from 'react-modal';
import userData from './userData.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: userData,
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
