import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectors from '../../redux/selectors';
import operationsUsers from '../../redux/operations/operationsUsers';
// components
import RegisteredUsersView from './RegisteredUsersView';
// styles
import styles from './RegisteredUsers.module.css';

class RegisteredUsersContainer extends Component {
  state = {};

  componentDidMount() {
    const { fetchUsers } = this.props;

    fetchUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <h3 className={styles.title}>Registered Users</h3>
        <RegisteredUsersView users={users} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: selectors.getUsers(state),
});
const mapDispatchToProps = {
  fetchUsers: operationsUsers.fetchUsers,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisteredUsersContainer);
