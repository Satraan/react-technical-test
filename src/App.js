import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Card from './Card/Card';
import ExpandedView from './ExpandedView/ExpandedView';
import Modal from 'react-modal';
import userData from './userData.json';


const modalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : '#aad2fd',
    boxShadow             : '6px 4px 5px 0px rgba(125,124,125,0.64)'

  }
};



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: userData,
      activeuser: null,
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
    this.setState({
      activeuser: this.state.users[0]
    });
  }
  expandProfile = (key) => {
    let user = this.state.users[key-1];
    this.setState({
      modalIsOpen: true,
      activeuser: user
    });

    console.log(this.state.activeuser);


  }

  render() {
    const { users } = this.state;
    const StyledMain = styled.div`
      text-align:center;
    `;

    return (
      <StyledMain>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={modalStyles}
            contentLabel="Example Modal">
              <ExpandedView user={this.state.activeuser}/>
            </Modal>

          <ul>
            {users.map(user =>
                <Card key={user.id}  user={user} expandProfile={this.expandProfile}/>
            )}
          </ul>
      </StyledMain>


    );
  }
}

export default App;
