import React from 'react';
import Select from 'react-select';
// styles
import styles from './RegistrationForm.module.css';

const CountrySelector = props => {
  const { items = [], handleChangeCountries } = props;

  return (
    <Select
      className={styles.select}
      options={items.map(item => ({
        value: item.hasc,
        label: item.name,
      }))}
      onChange={option => handleChangeCountries(option.value)}
      placeholder="Select Country..."
    />
  );
};
export default CountrySelector;
