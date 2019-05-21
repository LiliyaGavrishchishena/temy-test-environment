import React from 'react';
import Select from 'react-select';
// styles
import styles from './RegistrationForm.module.css';

const StateSelector = props => {
  const { items = [], handleChangeState } = props;

  return (
    <Select
      className={styles.select}
      options={items.map(item => ({
        value: item.hasc,
        label: item.name,
      }))}
      onChange={option => handleChangeState(option.value)}
      placeholder="Select State..."
    />
  );
};
export default StateSelector;
