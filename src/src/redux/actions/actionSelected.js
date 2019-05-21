import types from '../actionTypes/actionTypesSelected';

const onSelectCountries = countries => ({
  type: types.SELECTED_COUNTRIES,
  payload: countries,
});

const onSelectState = state => ({
  type: types.SELECTED_STATE,
  payload: state,
});

const onSelectCity = city => ({
  type: types.SELECTED_CITY,
  payload: city,
});

export default {
  onSelectCountries,
  onSelectState,
  onSelectCity,
};
