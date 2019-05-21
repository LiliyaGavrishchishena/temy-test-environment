import React, { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../redux/operations/operationsUsers';
// components
import RegistrationFormContainer from './RegistrationForm/RegistrationFormContainer';
import RegisteredUsersContainer from './RegisteredUsers/RegisteredUsersContainer';
// styles
import styles from './App.module.css';

class App extends Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    return (
      <div className={styles.container}>
        <RegistrationFormContainer />

        <RegisteredUsersContainer />
      </div>
    );
  }
}

const mapDispatchToProp = {
  getUsers: operations.fetchUsers,
};

export default connect(
  null,
  mapDispatchToProp,
)(App);
