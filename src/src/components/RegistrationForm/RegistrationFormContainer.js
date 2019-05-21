import React, { Component } from 'react';
import { connect } from 'react-redux';
// components
import RegistrationFormView from './RegistrationFormView';
import operationsCities from '../../redux/operations/operationsCities';
import operationsCountries from '../../redux/operations/operationsCountries';
import operationsStates from '../../redux/operations/operationsStates';
import actionSelected from '../../redux/actions/actionSelected';
import selectors from '../../redux/selectors';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
};

class RegistrationFormContainer extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const { fetchCities, fetchCountries, fetchStates } = this.props;

    fetchCities();
    fetchCountries();
    fetchStates();
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { password, passwordRepeate } = this.state;

    if (password !== passwordRepeate) {
      this.setState({ isValidPass: false });
      return;
    }

    const { signUp } = this.props;
    signUp({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const {
      countries,
      onSelectCountries,
      onSelectState,
      onSelectCity,
    } = this.props;
    console.log(countries);
    return (
      <RegistrationFormView
        {...this.state}
        {...this.props}
        onChange={this.onChange}
        onChangeCountries={onSelectCountries}
        onChangeState={onSelectState}
        onChangeCity={onSelectCity}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  countries: selectors.getCountries(state),
  states: selectors.getStates(state),
  cities: selectors.getCities(state),
  selectedCountries: selectors.getSelectedCountries(state),
  selectedStates: selectors.getSelectedStates(state),
});

const mapDispatchToProps = {
  fetchCities: operationsCities.fetchCities,
  fetchCountries: operationsCountries.fetchCountries,
  fetchStates: operationsStates.fetchStates,
  onSelectCountries: actionSelected.onSelectCountries,
  onSelectState: actionSelected.onSelectState,
  onSelectCity: actionSelected.onSelectCity,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegistrationFormContainer);
