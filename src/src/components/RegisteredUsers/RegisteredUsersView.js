import React from 'react';
import styles from './RegisteredUsers.module.css';

const RegisteredUsersView = ({ users = [] }) => (
  <>
    <ul className={styles.list}>
      {users.map(({ id, name }) => (
        <li key={id} className={styles.item}>
          {name}
        </li>
      ))}
    </ul>
  </>
);

export default RegisteredUsersView;
