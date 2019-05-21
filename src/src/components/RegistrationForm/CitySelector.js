import React from 'react';
import Select from 'react-select';
// styles
import styles from './RegistrationForm.module.css';

const CitySelector = props => {
  const { items = [], handleChangeCity } = props;

  return (
    <Select
      className={styles.select}
      options={items.map(item => ({
        value: item.hasc,
        label: item.name,
      }))}
      onChange={option => handleChangeCity(option.value)}
      placeholder="Select City..."
    />
  );
};
export default CitySelector;
