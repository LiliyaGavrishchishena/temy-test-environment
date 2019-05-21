import React from 'react';
// components
import CountrySelector from './CountrySelector';
import StateSelector from './StateSelector';
import CitySelector from './CitySelector';

// styles
import styles from './RegistrationForm.module.css';

const RegistrationFormView = ({
  name,
  email,
  phone,
  address,
  onChange,
  onSubmit,
  countries,
  states,
  cities,
  onChangeCountries,
  selectedCountries,
  onChangeState,
  onChangeCity,
  selectedStates,
}) => (
  <form className={styles.form} onSubmit={onSubmit}>
    <label className={styles.label}>
      Name
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        placeholder="My name is"
        onChange={onChange}
        required
        autoCapitalize="off"
      />
    </label>
    <label className={styles.label}>
      Email
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        placeholder="My email"
        onChange={onChange}
        required
      />
    </label>
    <label className={styles.label}>
      Country
      <CountrySelector
        items={countries}
        handleChangeCountries={onChangeCountries}
      />
    </label>
    {selectedCountries && (
      <label className={styles.label}>
        State
        <StateSelector items={states} handleChangeState={onChangeState} />
      </label>
    )}
    {selectedStates && (
      <label className={styles.label}>
        City
        <CitySelector items={cities} handleChangeCity={onChangeCity} />
      </label>
    )}

    <label className={styles.label}>
      Phone
      <input
        className={styles.input}
        type="text"
        name="phone"
        value={phone}
        placeholder="My phone"
        onChange={onChange}
        required
      />
    </label>
    <label className={styles.label}>
      Address
      <input
        className={styles.input}
        type="text"
        name="address"
        value={address}
        placeholder="Addresss"
        onChange={onChange}
      />
    </label>
    <label className={styles.label}>
      About me
      <textarea
        className={styles.textarea}
        type="text"
        name="about"
        onChange={onChange}
      />
    </label>
    <button className={styles.button} type="submit">
      Register
    </button>
  </form>
);

export default RegistrationFormView;
