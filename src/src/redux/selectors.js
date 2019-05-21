const getUsers = state => state.users;
const getCountries = state => state.countries;
const getStates = state => state.states;
const getCities = state => state.cities;

const getSelectedCountries = state => state.selected.countries;
const getSelectedStates = state => state.selected.states;

export default {
  getUsers,
  getCountries,
  getStates,
  getCities,
  getSelectedCountries,
  getSelectedStates,
};
